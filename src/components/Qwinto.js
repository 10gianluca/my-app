import React from 'react';
import { useNavigate } from "react-router-dom";
import './Qwinto.css';
import "./fonts/IMFellDWPica-Italic.ttf"

 function Qwinto() {
  const navigate = useNavigate();

  const changePage = (e) => {
    e.preventDefault();
    navigate('/')
  };


     const QwintoDiceRoller = () => {
        var diceClicked1 = document.getElementById("QwintoDie1").getAttribute("clicked");
        var diceClicked2 = document.getElementById("QwintoDie2").getAttribute("clicked");
        var diceClicked3 = document.getElementById("QwintoDie3").getAttribute("clicked");
        if (diceClicked1 === "true"){
            diceRoller1()
        }else{
            document.getElementById("QwintoDie1").value=''
        }
        if (diceClicked2 === "true"){
            diceRoller2()
        }else{
            document.getElementById("QwintoDie2").value=''
        }
        if (diceClicked3 === "true"){
            diceRoller3()
        }else{
            document.getElementById("QwintoDie3").value=''
        }
        
        const diceIds = ["QwintoDie1", "QwintoDie2", "QwintoDie3"];
        let diceTotal = 0;

        diceIds.forEach(diceId => {
            const diceClicked = document.getElementById(diceId).getAttribute("clicked");
            const diceValue = parseInt(document.getElementById(diceId).value, 10);

            if (diceClicked === "true" && !isNaN(diceValue)) {
            diceTotal += diceValue;
            }
        });

        const diceTotalBox = document.getElementById("QwintoDieTotal");
        diceTotalBox.value = diceTotal.toString();

    }
     const diceRoller1 = () => {
        var dice1 = ["1", "2", "3", "4", "5","6"];
        var dice1RolledRandom = Math.floor(Math.random() * dice1.length)
        var dice1Rolled = dice1[dice1RolledRandom];
        var dice1QwintoBox = document.getElementById("QwintoDie1");
        if (dice1Rolled === "1"){
            dice1QwintoBox.value = "1"
        } else if (dice1Rolled === "2"){
            dice1QwintoBox.value = "2"
        } else if (dice1Rolled === "3"){
            dice1QwintoBox.value = "3"
        } else if (dice1Rolled === "4"){
            dice1QwintoBox.value = "4"
        } else if (dice1Rolled === "5"){
            dice1QwintoBox.value = "5"
        } else if (dice1Rolled === "6"){
            dice1QwintoBox.value = "6"
        }
    }
    const diceRoller2 = () => {
        var dice2 = ["1", "2", "3", "4", "5","6"];
        var dice2RolledRandom = Math.floor(Math.random() * dice2.length)
        var dice2Rolled = dice2[dice2RolledRandom];
        var dice2QwintoBox = document.getElementById("QwintoDie2");
        if (dice2Rolled === "1"){
            dice2QwintoBox.value = "1"
        } else if (dice2Rolled === "2"){
            dice2QwintoBox.value = "2"
        } else if (dice2Rolled === "3"){
            dice2QwintoBox.value = "3"
        } else if (dice2Rolled === "4"){
            dice2QwintoBox.value = "4"
        } else if (dice2Rolled === "5"){
            dice2QwintoBox.value = "5"
        } else if (dice2Rolled === "6"){
            dice2QwintoBox.value = "6"
        }
    }
    const diceRoller3 = () => {
        var dice3 = ["1", "2", "3", "4", "5","6"];
        var dice3RolledRandom = Math.floor(Math.random() * dice3.length)
        var dice3Rolled = dice3[dice3RolledRandom];
        var dice3QwintoBox = document.getElementById("QwintoDie3");
        if (dice3Rolled === "1"){
            dice3QwintoBox.value = "1"
        } else if (dice3Rolled === "2"){
            dice3QwintoBox.value = "2"
        } else if (dice3Rolled === "3"){
            dice3QwintoBox.value = "3"
        } else if (dice3Rolled === "4"){
            dice3QwintoBox.value = "4"
        } else if (dice3Rolled === "5"){
            dice3QwintoBox.value = "5"
        } else if (dice3Rolled === "6"){
            dice3QwintoBox.value = "6"
        }
    }


     const diceSelector = (diceId) => {
        var diceClicked = document.getElementById(diceId);
        if (diceClicked.getAttribute("clicked") === "false") {
            diceClicked.setAttribute("clicked", "true");
            diceClicked.style.borderColor = "red";
        } else {
            diceClicked.style.borderColor = "black";
            diceClicked.setAttribute("clicked", "false");
        }
    }
    const minusClick = (minusId) => {
        var minusClicked = document.getElementById(minusId);
        if (minusClicked.getAttribute("clicked") === "false") {
            minusClicked.setAttribute("clicked", "true");
            minusClicked.style.background = "red";
        } else {
            minusClicked.style.background = "white";
            minusClicked.setAttribute("clicked", "false");
        }
    }

  return (
    <body className="pageQwinto">
      <div className="Board">
        <nav className='navBar'>
          <div className="buttonContainer">
            <button className='button' id='homeButton' onClick={changePage}>HOME</button>
          </div>
        </nav>
        <header className="Board-header">
          <img className='boredBackground' src='' alt="" />
        </header>
        <div class="header">
        </div>

            <div class="QwintoBoard" id="Qwintoboard1">

                <input class="QwintoSpaceSquare" readOnly></input>
                <input class="QwintoSpaceSquare" readOnly></input>
                <input class="QwintoCircleSquare"  id="orangeScore" maxlength="2"></input>
                <input class="QwintoHexSquare"  id="orangeScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="orangeScore" maxlength="2"></input>
                <input class="QwintoSpaceSquare"   readOnly></input>
                <input class="QwintoCircleSquare"  id="orangeScore" maxlength="2"></input>
                <input class="QwintoHexSquare"  id="orangeScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="orangeScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="orangeScore" maxlength="2"></input>
                <input class="QwintoCircleSquare" id="orangeScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="orangeScore" maxlength="2"></input>
                
                <input class="QwintoSpaceSquare"   readOnly></input>
                <input class="QwintoCircleSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoSpaceSquare" readOnly></input>
                <input class="QwintoCircleSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoHexSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="yellowScore" maxlength="2"></input>
                <input class="QwintoSpaceSquare" readOnly></input>

                <input class="QwintoCircleSquare"  id="purpleScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="purpleScore" maxlength="2"></input>
                <input class="QwintoHexSquare"  id="purpleScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="purpleScore" maxlength="2"></input>
                <input class="QwintoSpaceSquare" readOnly></input>
                <input class="QwintoCircleSquare"  id="purpleScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="purpleScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="purpleScore" maxlength="2"></input>
                <input class="QwintoCircleSquare"  id="purpleScore" maxlength="2"></input>
                <input class="QwintoHexSquare"  id="purpleScore" maxlength="2"></input>
            </div>
            <div className='minus'>
                <input onClick={() =>minusClick('minus1')} id='minus1' clicked="false" value={"-5"} readOnly></input>
                <input onClick={() =>minusClick('minus2')} id='minus2' clicked="false" value={"-5"} readOnly></input>
                <input onClick={() =>minusClick('minus3')} id='minus3' clicked="false" value={"-5"} readOnly></input>
                <input onClick={() =>minusClick('minus4')} id='minus4' clicked="false" value={"-5"} readOnly></input>
            </div>
            <div className='QwintoScore'>
                <input class="QwintoCircleSquare" id="orangeScore" maxlength="2"></input>
                <input class="QwintoCircleSquare" id="yellowScore" maxlength="2"></input>
                <input class="QwintoCircleSquare" id="purpleScore" maxlength="2"></input>
                <input class="QwintoSpaceSquare" value={"+"}readOnly></input>
                <input class="QwintoHexSquare" maxlength="2"></input>
                <input class="QwintoHexSquare" maxlength="2"></input>
                <input class="QwintoHexSquare" maxlength="2"></input>
                <input class="QwintoHexSquare" maxlength="2"></input>
                <input class="QwintoHexSquare" maxlength="2"></input>
                <input class="QwintoSpaceSquare" value={"-"}readOnly></input>
                <input class="QwintoHexSquare" id="minusScore"maxlength="2"></input>
                <input class="QwintoSpaceSquare" value={"="}readOnly></input>
                <input class="QwintoHexSquare" maxlength="2"></input>




 

            </div>
            <div class="QwintoDice">
                <input class="QwintoDie1" id="QwintoDie1" onClick={() =>diceSelector('QwintoDie1')} clicked="false" readonly ></input>
                <input class="QwintoDie2" id="QwintoDie2" onClick={() =>diceSelector('QwintoDie2')} clicked="false" readonly></input>
                <input class="QwintoDie3" id="QwintoDie3" onClick={() =>diceSelector('QwintoDie3')} clicked="false" readonly></input>
                <button onClick={() =>QwintoDiceRoller()}> roll</button>
                <input class="QwintoDieTotal" id="QwintoDieTotal" readonly></input>
            </div>
            
        </div>
    </body>
  );
}

export default Qwinto;
