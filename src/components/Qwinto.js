import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Qwinto.css';
import "./fonts/IMFellDWPica-Italic.ttf";

function Qwinto() {
  const navigate = useNavigate();

  // State to track dice values and whether they are selected
  const [dice, setDice] = useState([
    { id: 'QwintoDie1', value: '', clicked: false, color: 'orange' },
    { id: 'QwintoDie2', value: '', clicked: false, color: 'yellow' },
    { id: 'QwintoDie3', value: '', clicked: false, color: 'purple' },
  ]);

  // State to track the total dice value
  const [diceTotal, setDiceTotal] = useState(0);

  // State to track the locked inputs
  const [lockedInputs, setLockedInputs] = useState([]);

  // State to track the minus score
  const [minusScore, setMinusScore] = useState(0);

  // State to track the roll button text and visibility
  const [rollButtonText, setRollButtonText] = useState('Roll');
  const [showRollButton, setShowRollButton] = useState(true);

  const changePage = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleDiceClick = (id) => {
    setDice(prevDice =>
      prevDice.map(die =>
        die.id === id ? { ...die, clicked: !die.clicked } : die
      )
    );
  };

  const rollDice = () => {
    const updatedDice = dice.map(die => {
      if (die.clicked) {
        const rolledValue = Math.floor(Math.random() * 6) + 1;
        return { ...die, value: rolledValue };
      }
      return { ...die, value: '' };
    });

    setDice(updatedDice);

    const total = updatedDice.reduce((sum, die) => {
      const diceValue = parseInt(die.value, 10);
      return die.clicked && !isNaN(diceValue) ? sum + diceValue : sum;
    }, 0);

    setDiceTotal(total);

    // Change the roll button to "Reroll" after the first click
    if (rollButtonText === 'Roll') {
      setRollButtonText('Reroll');
    } else {
      // Hide the roll button after the reroll
      setShowRollButton(false);
    }
  };

  const handleMinusClick = (id) => {
    const element = document.getElementById(id);
    const clicked = element.getAttribute("clicked") === "true";
    element.setAttribute("clicked", !clicked);
    element.style.background = clicked ? "white" : "red";

    if (!clicked) {
      setMinusScore(prevScore => prevScore + 5);
    } else {
      setMinusScore(prevScore => prevScore - 5);
    }
  };

  const renderPips = (value) => {
    const pipPositions = [
      [], // 0
      ["one"], // 1
      ["two", "five"], // 2
      ["two", "one", "five"], // 3
      ["two", "three", "four", "five"], // 4
      ["two", "three", "one", "four", "five"], // 5
      ["two", "three", "four", "five", "six", "seven"], // 6
    ];

    return pipPositions[value] ? pipPositions[value].map((pip, index) => (
      <div key={index} className={`pip ${pip}`} />
    )) : null;
  };

  const getRowValues = (rowClassName) => {
    const inputs = document.querySelectorAll(`.${rowClassName} input`);
    return Array.from(inputs).map(input => parseInt(input.value, 10)).filter(val => !isNaN(val));
  };

  const handleInputClick = (e) => {
    // If the input already has a value, remove it
    if (e.target.value) {
        e.target.value = '';
        return;
    }

    const inputValue = e.target.value;
    const rowClassName = e.target.parentNode.className;
    const rowValues = getRowValues(rowClassName);
  
    // Get the index of the clicked input in its row
    const inputIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
  
    // Get all inputs in the same column across all rows
    const allRows = document.querySelectorAll('.QwintoBoard > div');
    const columnValues = Array.from(allRows).map(row => {
      const input = row.children[inputIndex];
      return input ? parseInt(input.value, 10) : NaN;
    }).filter(val => !isNaN(val));
  
    // Prevent placing a duplicate number in the row
    if (rowValues.includes(diceTotal)) {
      alert("Duplicate values are not allowed in the same row!");
      return;
    }
  
    // Prevent placing a duplicate number in the column
    if (columnValues.includes(diceTotal)) {
      alert("Duplicate values are not allowed in the same column!");
      return;
    }
  
    // Ensure numerical order within the row
    const previousValue = e.target.previousElementSibling ? parseInt(e.target.previousElementSibling.value, 10) : null;
    const nextValue = e.target.nextElementSibling ? parseInt(e.target.nextElementSibling.value, 10) : null;
  
    if ((previousValue !== null && diceTotal <= previousValue) || (nextValue !== null && diceTotal >= nextValue)) {
      alert("Numbers must be placed in numerical order within the row!");
      return;
    }
  
    // Get the row color from the row className
    const rowColor = rowClassName.includes('orangeRange') ? 'orange' :
                     rowClassName.includes('yellowRange') ? 'yellow' :
                     rowClassName.includes('purpleRange') ? 'purple' : '';
  
    // Check if any dice match the row color
    const allowedColors = dice.filter(die => die.clicked && die.value !== '').map(die => die.color);
  
    if (!allowedColors.includes(rowColor)) {
      alert(`You can only place numbers in the ${allowedColors.join(', ')} rows!`);
      return;
    }

    if (diceTotal > 0) {
      // If there's no value and diceTotal > 0, insert the diceTotal
      e.target.value = diceTotal;
    }
  };

  const calculateScore = () => {
    let totalScore = 0;

    // Calculate row scores
    const rows = [
      document.querySelectorAll('.orangeRange input'),
      document.querySelectorAll('.yellowRange input'),
      document.querySelectorAll('.purpleRange input'),
    ];

    rows.forEach((row) => {
      const rowValues = Array.from(row).map(input => parseInt(input.value, 10));
      if (rowValues.every(val => !isNaN(val))) { // Check if the row is fully filled
        totalScore += rowValues.reduce((sum, val) => sum + val, 0);
      }
    });

    // Calculate column scores
    const columns = [
      Array.from(document.querySelectorAll('.QwintoBoard > div')).map(row => parseInt(row.children[0].value, 10)),
      Array.from(document.querySelectorAll('.QwintoBoard > div')).map(row => parseInt(row.children[1].value, 10)),
      // Add more columns as needed based on your grid layout
    ];

    columns.forEach((column) => {
      const columnValues = column.filter(val => !isNaN(val));
      if (columnValues.length === rows.length) { // Check if the column is fully filled
        totalScore += Math.max(...columnValues);
      }
    });

    // Subtract minus points
    totalScore -= minusScore;

    return totalScore;
  };

  const Done = () => {
    // Lock the inputs that have a value
    const allInputs = document.querySelectorAll('.QwintoBoard input');

    allInputs.forEach(input => {
      if (input.value) {
        input.setAttribute('readOnly', true);
      }
    });

    // Calculate and display the final score
    const finalScore = calculateScore();
    alert(`Your final score is: ${finalScore}`);

    // Clear dice and dice total for the next round
    setDice([
      { id: 'QwintoDie1', value: '', clicked: false, color: 'orange' },
      { id: 'QwintoDie2', value: '', clicked: false, color: 'yellow' },
      { id: 'QwintoDie3', value: '', clicked: false, color: 'purple' },
    ]);
    setDiceTotal(0);

    // Reset the roll button for the next round
    setRollButtonText('Roll');
    setShowRollButton(true);
  };

  return (
    <div className="pageQwinto">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <nav className='navBar'>
        <div className="buttonContainer">
          <button className='button' id='homeButton' onClick={changePage}>HOME</button>
        </div>
      </nav>
      <div className="Board">
        <header className="Board-header">
          <img className='boredBackground' src='' alt="" />
        </header>
        <div className="header"></div>
            <div className="QwintoBoard" id="Qwintoboard1">
              <div className='orangeRange'>
                  <input readOnly className="QwintoSpaceSquare" onClick={handleInputClick}></input>
                  <input readOnly className="QwintoSpaceSquare" onClick={handleInputClick}></input>
                  <input className="QwintoCircleSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoHexSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input readOnly className="QwintoSpaceSquare" onClick={handleInputClick}></input>
                  <input className="QwintoCircleSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoHexSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
              </div>
              <div className='yellowRange'>
                  <input readOnly className="QwintoSpaceSquare" onClick={handleInputClick}></input>
                  <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input readOnly className="QwintoSpaceSquare" onClick={handleInputClick}></input>
                  <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoHexSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
              </div>
              <div className='purpleRange'>
                  <input className="QwintoCircleSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoHexSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input readOnly className="QwintoSpaceSquare" onClick={handleInputClick}></input>
                  <input className="QwintoCircleSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoCircleSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input className="QwintoHexSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                  <input readOnly className="QwintoSpaceSquare" onClick={handleInputClick}></input>
                  <input readOnly className="QwintoSpaceSquare" onClick={handleInputClick}></input>
              </div>
              <div className='minus'>
                {Array.from({ length: 4 }, (_, i) => (
                  <input
                    key={i}
                    onClick={() => handleMinusClick(`minus${i + 1}`)}
                    id={`minus${i + 1}`}
                    clicked="false"
                    value={"-5"}
                    readOnly
                  />
                ))}
              </div>
            <div className='QwintoScore'>
                <input className="QwintoCircleSquare" id="orangeScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                <input className="QwintoCircleSquare" id="yellowScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                <input className="QwintoCircleSquare" id="purpleScore" maxLength="2" onClick={handleInputClick} readOnly></input>
                <input readOnly className="QwintoSpaceSquare" id="equationSign" value={"+"} ></input>
                <input readOnly className="QwintoHexSquare" maxLength="2" onClick={handleInputClick}></input>
                <input readOnly className="QwintoHexSquare" maxLength="2" onClick={handleInputClick}></input>
                <input readOnly className="QwintoHexSquare" maxLength="2" onClick={handleInputClick}></input>
                <input readOnly className="QwintoHexSquare" maxLength="2" onClick={handleInputClick}></input>
                <input readOnly className="QwintoHexSquare" maxLength="2" onClick={handleInputClick}></input>
                <input readOnly className="QwintoSpaceSquare" id="equationSign" value={"-"} ></input>
                <input readOnly className="QwintoHexSquare" id="minusScore" value={minusScore} maxLength="2" onClick={handleInputClick}></input>
                <input readOnly className="QwintoSpaceSquare" id="equationSign" value={"="} ></input>
                <input readOnly className="QwintoHexSquare" maxLength="2" onClick={handleInputClick}></input>
            </div>
            </div>

            <div className="QwintoDice">
                {dice.map(die => (
                    <div
                      key={die.id}
                      className={`die ${die.id}`}
                      id={die.id}
                      onClick={() => handleDiceClick(die.id)}
                      style={{ borderColor: die.clicked ? 'red' : 'black' }}
                    >
                      {renderPips(die.value)}
                    </div>
                ))}
                {showRollButton && (
                  <button onClick={rollDice} className='rollButton'>{rollButtonText}</button>
                )}
                <input readOnly className="QwintoDieTotal" value={diceTotal}/>
                <button onClick={Done} className='rollButton'>Done</button>
            </div>
        </div>
    </div>
  );
}

export default Qwinto;
