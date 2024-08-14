import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Qwinto.css';
import "./fonts/IMFellDWPica-Italic.ttf";

function Qwinto() {
  const navigate = useNavigate();

  // State to track dice values and whether they are selected
  const [dice, setDice] = useState([
    { id: 'QwintoDie1', value: '', clicked: false },
    { id: 'QwintoDie2', value: '', clicked: false },
    { id: 'QwintoDie3', value: '', clicked: false },
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

  const handleInputClick = (e) => {
    const inputValue = e.target.value;

    if (!lockedInputs.includes(e.target) && inputValue) {
      // If there's already a value, remove it on click (if not locked)
      e.target.value = '';
    } else if (!lockedInputs.includes(e.target) && diceTotal > 0) {
      // If there's no value and diceTotal > 0, insert the diceTotal
      e.target.value = diceTotal;
    }
  };

  const Done = () => {
    // Lock the inputs that have a value
    const allInputs = document.querySelectorAll('input');
    const inputsToLock = [];

    allInputs.forEach(input => {
      if (input.value) {
        input.setAttribute('readOnly', true);
        inputsToLock.push(input);
      }
    });

    // Store the locked inputs in state
    setLockedInputs(inputsToLock);

    // Clear dice and dice total
    setDice([
      { id: 'QwintoDie1', value: '', clicked: false },
      { id: 'QwintoDie2', value: '', clicked: false },
      { id: 'QwintoDie3', value: '', clicked: false },
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
