import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Qwinto.css';
import "./fonts/IMFellDWPica-Italic.ttf";

function Qwinto() {
  const navigate = useNavigate();

  const [dice, setDice] = useState([
    { id: 'QwintoDie1', value: '', clicked: false, color: 'orange' },
    { id: 'QwintoDie2', value: '', clicked: false, color: 'yellow' },
    { id: 'QwintoDie3', value: '', clicked: false, color: 'purple' },
  ]);

  const [diceTotal, setDiceTotal] = useState(0);
  const [minusScore, setMinusScore] = useState(0);
  const [rollButtonText, setRollButtonText] = useState('Roll');
  const [showRollButton, setShowRollButton] = useState(true);
  const [previousInput, setPreviousInput] = useState(null); // Track the previously clicked input
  const [lockedInputs, setLockedInputs] = useState([]); // Track locked inputs

  const [orangeArray, setOrangeArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [yellowArray, setYellowArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [purpleArray, setPurpleArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    console.log("Updated Dice State:", dice);
  }, [dice]);

  const changePage = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleDiceClick = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, clicked: !die.clicked } : die
      )
    );
  };

  const rollDice = () => {
    console.log("rollDice function called");

    // Check if no dice were clicked
    const anyDiceClicked = dice.some((die) => die.clicked);
    if (!anyDiceClicked) {
      alert("Please click at least one die before rolling!");
      return; // Exit the function early if no dice were clicked
    }

    const updatedDice = dice.map((die) => {
      if (die.clicked) {
        const rolledValue = Math.floor(Math.random() * 6) + 1;
        console.log(`Die ${die.id} rolled value:`, rolledValue);
        return { ...die, value: rolledValue };
      } else {
        console.log(`Die ${die.id} was not clicked, no value assigned`);
      }
      return { ...die, value: "" };
    });

    console.log("Updated Dice after rolling:", updatedDice);

    setDice(updatedDice);

    const total = updatedDice.reduce((sum, die) => {
      const diceValue = parseInt(die.value, 10);
      return die.clicked && !isNaN(diceValue) ? sum + diceValue : sum;
    }, 0);

    console.log("Dice Total Calculated:", total);

    setDiceTotal(total);

    if (rollButtonText === "Roll") {
      setRollButtonText("Reroll");
    } else {
      setShowRollButton(false);
    }

    const allowedColors = updatedDice
      .filter((die) => die.clicked && die.value !== "")
      .map((die) => die.color);
    console.log("Allowed Colors:", allowedColors);

    const allInputs = document.querySelectorAll(".QwintoBoard input");

    // Iterate over every input and check if it breaks any rules
    allInputs.forEach((input) => {
      const rowClassName = input.parentNode.className;
      const rowColor = rowClassName.includes("orangeRange")
        ? "orange"
        : rowClassName.includes("yellowRange")
        ? "yellow"
        : rowClassName.includes("purpleRange")
        ? "purple"
        : "";

      const rowValues = getRowValues(rowClassName);
      console.log(`Row ${rowColor} Values:`, rowValues); // Log every number in the row

      if (
        allowedColors.includes(rowColor) && // Row color matches allowed colors
        input.value === "" // Input is empty
      ) {
        input.style.border = "2px solid neon green"; // Highlight valid input with neon green border
        input.style.outline = "none"; // Clear any outline that might obscure the border
        console.log(
          `Valid placement found for value ${total} in row ${rowColor}. Border changed to neon green.`
        );
      } else {
        console.log(
          `Invalid placement for value ${total} in row ${rowColor}.`
        );
      }
    });
  };

  const handleMinusClick = (id) => {
    const element = document.getElementById(id);
    const clicked = element.getAttribute("clicked") === "true";
    element.setAttribute("clicked", !clicked);
    element.style.background = clicked ? "white" : "red";

    if (!clicked) {
      setMinusScore((prevScore) => prevScore + 5);
    } else {
      setMinusScore((prevScore) => prevScore - 5);
    }
  };

  const renderPips = (value) => {
    const pipPositions = [
      [],
      ["one"],
      ["two", "five"],
      ["two", "one", "five"],
      ["two", "three", "four", "five"],
      ["two", "three", "one", "four", "five"],
      ["two", "three", "four", "five", "six", "seven"],
    ];

    return pipPositions[value]
      ? pipPositions[value].map((pip, index) => (
          <div key={index} className={`pip ${pip}`} />
        ))
      : null;
  };

  const getRowValues = (rowClassName) => {
    const inputs = document.querySelectorAll(`.${rowClassName} input`);
    return Array.from(inputs)
      .map((input) => parseInt(input.value, 10))
      .filter((val) => !isNaN(val));
  };

  const handleInputClick = (e) => {
    if (lockedInputs.includes(e.target)) {
      return; // Prevent editing of locked inputs
    }

    const rowClassName = e.target.parentNode.className;
    const rowColor = rowClassName.includes("orangeRange")
      ? "orange"
      : rowClassName.includes("yellowRange")
      ? "yellow"
      : rowClassName.includes("purpleRange")
      ? "purple"
      : "";

    const allowedColors = dice
      .filter((die) => die.clicked && die.value !== "")
      .map((die) => die.color);

    if (!allowedColors.includes(rowColor)) {
      alert(`You can only place numbers in the ${allowedColors.join(", ")} rows!`);
      return;
    }

    // Calculate the correct index in the array, skipping SpaceSquares
    let actualIndex = -1;
    const inputs = Array.from(e.target.parentNode.children);
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains("QwintoSpaceSquare")) {
        actualIndex++;
      }
      if (inputs[i] === e.target) {
        break;
      }
    }

    if (diceTotal > 0) {
      if (previousInput && previousInput !== e.target) {
        let previousActualIndex = -1;
        const previousInputs = Array.from(previousInput.parentNode.children);
        for (let i = 0; i < previousInputs.length; i++) {
          if (!previousInputs[i].classList.contains("QwintoSpaceSquare")) {
            previousActualIndex++;
          }
          if (previousInputs[i] === previousInput) {
            break;
          }
        }

        const previousRowColor = previousInput.parentNode.className.includes("orangeRange")
          ? "orange"
          : previousInput.parentNode.className.includes("yellowRange")
          ? "yellow"
          : previousInput.parentNode.className.includes("purpleRange")
          ? "purple"
          : "";

        // Reset the previous input to 0 in the array and clear the input box
        if (previousRowColor === "orange") {
          const newOrangeArray = [...orangeArray];
          newOrangeArray[previousActualIndex] = 0;
          setOrangeArray(newOrangeArray);
        } else if (previousRowColor === "yellow") {
          const newYellowArray = [...yellowArray];
          newYellowArray[previousActualIndex] = 0;
          setYellowArray(newYellowArray);
        } else if (previousRowColor === "purple") {
          const newPurpleArray = [...purpleArray];
          newPurpleArray[previousActualIndex] = 0;
          setPurpleArray(newPurpleArray);
        }

        previousInput.value = ""; // Clear the value of the previous input box
      }

      // Update the corresponding array based on the row color
      if (rowColor === "orange") {
        const newOrangeArray = [...orangeArray];
        newOrangeArray[actualIndex] = diceTotal; // Update only the clicked box
        setOrangeArray(newOrangeArray);
      } else if (rowColor === "yellow") {
        const newYellowArray = [...yellowArray];
        newYellowArray[actualIndex] = diceTotal; // Update only the clicked box
        setYellowArray(newYellowArray);
      } else if (rowColor === "purple") {
        const newPurpleArray = [...purpleArray];
        newPurpleArray[actualIndex] = diceTotal; // Update only the clicked box
        setPurpleArray(newPurpleArray);
      }

      e.target.value = diceTotal; // Insert the diceTotal into the clicked box
      setPreviousInput(e.target); // Track the current box as the previous one
    }
  };

  const calculateScore = () => {
    let totalScore = 0;

    const rows = [
      document.querySelectorAll(".orangeRange input"),
      document.querySelectorAll(".yellowRange input"),
      document.querySelectorAll(".purpleRange input"),
    ];

    rows.forEach((row) => {
      const rowValues = Array.from(row).map((input) => parseInt(input.value, 10));
      if (rowValues.every((val) => !isNaN(val))) {
        totalScore += rowValues.reduce((sum, val) => sum + val, 0);
      }
    });

    totalScore -= minusScore;

    return totalScore;
  };

  const Done = () => {
    const allInputs = document.querySelectorAll(".QwintoBoard input");

    const newLockedInputs = Array.from(allInputs).filter((input) => input.value);
    setLockedInputs([...lockedInputs, ...newLockedInputs]); // Lock the inputs with values

    newLockedInputs.forEach((input) => {
      input.setAttribute("readOnly", true); // Set inputs with a value to read-only
    });

    const finalScore = calculateScore();
    alert(`Your final score is: ${finalScore}`);

    // Reset game state
    setDice([
      { id: "QwintoDie1", value: "", clicked: false, color: "orange" },
      { id: "QwintoDie2", value: "", clicked: false, color: "yellow" },
      { id: "QwintoDie3", value: "", clicked: false, color: "purple" },
    ]);
    setDiceTotal(0);
    setRollButtonText("Roll");
    setShowRollButton(true);
    setPreviousInput(null);
    console.log(orangeArray);
    console.log(yellowArray);
    console.log(purpleArray);
  };

  return (
    <div className="pageQwinto">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <nav className="navBar">
        <div className="buttonContainer">
          <button className="button" id="homeButton" onClick={changePage}>
            HOME
          </button>
        </div>
      </nav>
      <div className="Board">
        <header className="Board-header">
          <img className="boredBackground" src="" alt="" />
        </header>
        <div className="header"></div>
        <div className="QwintoBoard" id="Qwintoboard1">
          <div className="orangeRange">
            <input readOnly className="QwintoSpaceSquare"></input>
            <input readOnly className="QwintoSpaceSquare"></input>
            <input
              className="QwintoCircleSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoHexSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input readOnly className="QwintoSpaceSquare"></input>
            <input
              className="QwintoCircleSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoHexSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
          </div>
          <div className="yellowRange">
            <input readOnly className="QwintoSpaceSquare"></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input readOnly className="QwintoSpaceSquare"></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoHexSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
          </div>
          <div className="purpleRange">
            <input
              className="QwintoCircleSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoHexSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input readOnly className="QwintoSpaceSquare"></input>
            <input
              className="QwintoCircleSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoHexSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input readOnly className="QwintoSpaceSquare"></input>
            <input readOnly className="QwintoSpaceSquare"></input>
          </div>
          <div className="minus">
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
          <div className="QwintoScore">
            <input
              className="QwintoCircleSquare"
              id="orangeScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="yellowScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              className="QwintoCircleSquare"
              id="purpleScore"
              maxLength="2"
              onClick={handleInputClick}
              readOnly
            ></input>
            <input
              readOnly
              className="QwintoSpaceSquare"
              id="equationSign"
              value={"+"}
            ></input>
            <input
              readOnly
              className="QwintoHexSquare"
              maxLength="2"
              onClick={handleInputClick}
            ></input>
            <input
              readOnly
              className="QwintoHexSquare"
              maxLength="2"
              onClick={handleInputClick}
            ></input>
            <input
              readOnly
              className="QwintoHexSquare"
              maxLength="2"
              onClick={handleInputClick}
            ></input>
            <input
              readOnly
              className="QwintoHexSquare"
              maxLength="2"
              onClick={handleInputClick}
            ></input>
            <input
              readOnly
              className="QwintoHexSquare"
              maxLength="2"
              onClick={handleInputClick}
            ></input>
            <input
              readOnly
              className="QwintoSpaceSquare"
              id="equationSign"
              value={"-"}
            ></input>
            <input
              readOnly
              className="QwintoHexSquare"
              id="minusScore"
              value={minusScore}
              maxLength="2"
              onClick={handleInputClick}
            ></input>
            <input
              readOnly
              className="QwintoSpaceSquare"
              id="equationSign"
              value={"="}
            ></input>
            <input
              readOnly
              className="QwintoHexSquare"
              maxLength="2"
              onClick={handleInputClick}
            ></input>
          </div>
          <div className="QwintoDice">
            {dice.map((die) => (
              <div
                key={die.id}
                className={`die ${die.id}`}
                id={die.id}
                onClick={() => handleDiceClick(die.id)}
                style={{ borderColor: die.clicked ? "red" : "black" }}
              >
                {renderPips(die.value)}
              </div>
            ))}
            <input
              readOnly
              className="QwintoDieTotal"
              value={diceTotal}
            />
            {showRollButton && (
              <button onClick={rollDice} className="rollButton">
                {rollButtonText}
              </button>
            )}
            <button onClick={Done} className="rollButton">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qwinto;
