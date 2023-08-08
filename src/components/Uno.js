import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Uno.css';
import "./fonts/IMFellDWPica-Italic.ttf"

 function Uno() {
  const navigate = useNavigate();

  const changePage = (e) => {
    e.preventDefault();
    navigate('/')
  };


     const squareClicked = (squareId) => {
        var squarePlus = document.getElementById(squareId)
        if (squarePlus.clicked === "false") {
            squarePlus.clicked = "true" 
            squarePlus.style.borderStyle = "solid"
        } else {
            squarePlus.clicked = "false" 
            squarePlus.style.borderStyle = "dashed"
        }

    }

     const diceRoller = () => {
        var diceClicked1 = document.getElementById("die1").getAttribute("clicked");
        var diceClicked2 = document.getElementById("die2").getAttribute("clicked");
        var diceClicked3 = document.getElementById("die3").getAttribute("clicked");
        var diceClicked4 = document.getElementById("die4").getAttribute("clicked");
        var diceClicked5 = document.getElementById("die5").getAttribute("clicked");
        var diceClicked6 = document.getElementById("die6").getAttribute("clicked");
        if (diceClicked1 === "false"){
            diceRoller1()
        }
        if (diceClicked2 === "false"){
            diceRoller2()
        }
        if (diceClicked3 === "false"){
            diceRoller3()
        }
        if (diceClicked4 === "false"){
            diceRoller4()
        }
        if (diceClicked5 === "false"){
            diceRoller5()
        }
        if (diceClicked6 === "false"){
            diceRoller6()
        }
    }
     const diceRoller1 = () => {
        var star = String.fromCharCode(9733);
        var dice1 = ["B1", "Y2", star, "G6", "+1","R5"];
        var dice1RolledRandom = Math.floor(Math.random() * dice1.length)
        var dice1Rolled = dice1[dice1RolledRandom];
        var dice1Box = document.getElementById("die1");
        if (dice1Rolled === "B1"){
            document.getElementById("die1").style.backgroundColor = "Blue"
            dice1Box.value = "1"
        } else if (dice1Rolled === "Y2"){
            document.getElementById("die1").style.backgroundColor = "Gold"
            dice1Box.value = "2"
        } else if (dice1Rolled === "G6"){
            document.getElementById("die1").style.backgroundColor = "Green"
            dice1Box.value = "6"
        } else if (dice1Rolled === "R5"){
            document.getElementById("die1").style.backgroundColor = "Red"
            dice1Box.value = "5"
        } else if (dice1Rolled === star){
            document.getElementById("die1").style.backgroundColor = "white"
            dice1Box.value = star
        } else if (dice1Rolled === "+1"){
            document.getElementById("die1").style.backgroundColor = "white"
            dice1Box.value = "+1"
        }
    }

     const diceRoller2 = () => {
        var star = String.fromCharCode(9733);
        var dice2 = ["R6", "B2", star, "G1", "+1","Y3"];
        var dice2RolledRandom = Math.floor(Math.random() * dice2.length)
        var dice2Rolled = dice2[dice2RolledRandom];
        var dice2Box = document.getElementById("die2")
        if (dice2Rolled === "B2"){
            document.getElementById("die2").style.backgroundColor = "Blue"
            dice2Box.value = "2"
        } else if (dice2Rolled === "R6"){
            document.getElementById("die2").style.backgroundColor = "Red"
            dice2Box.value = "6"
        } else if (dice2Rolled === "G1"){
            document.getElementById("die2").style.backgroundColor = "Green"
            dice2Box.value = "1"
        } else if (dice2Rolled === "Y3"){
            document.getElementById("die2").style.backgroundColor = "Gold"
            dice2Box.value = "3"
        } else if (dice2Rolled === star){
            document.getElementById("die2").style.backgroundColor = "white"
            dice2Box.value = star
        } else if (dice2Rolled === "+1"){
            document.getElementById("die2").style.backgroundColor = "white"
            dice2Box.value = "+1"
        }
    }
     const diceRoller3 = () => {
        var star = String.fromCharCode(9733);
        var dice3 = ["B6", "Y1", star, "R4", "-1","G5"];
        var dice3RolledRandom = Math.floor(Math.random() * dice3.length)
        var dice3Rolled = dice3[dice3RolledRandom];
        var dice3Box = document.getElementById("die3")
        if (dice3Rolled === "B6"){
            document.getElementById("die3").style.backgroundColor = "Blue"
            dice3Box.value = "6"
        } else if (dice3Rolled === "Y1"){
            document.getElementById("die3").style.backgroundColor = "Gold"
            dice3Box.value = "3"
        } else if (dice3Rolled === "R4"){
            document.getElementById("die3").style.backgroundColor = "Red"
            dice3Box.value = "4"
        } else if (dice3Rolled === "G5"){
            document.getElementById("die3").style.backgroundColor = "Green"
            dice3Box.value = "5"
        } else if (dice3Rolled === star){
            document.getElementById("die3").style.backgroundColor = "white"
            dice3Box.value = star
        } else if (dice3Rolled === "-1"){
            document.getElementById("die3").style.backgroundColor = "white"
            dice3Box.value = "-1"
        }
    }
     const diceRoller4 = () => {
        var star = String.fromCharCode(9733);
        var dice4 = ["B3", "G2", star, "R1", "Y4","-1"];
        var dice4RolledRandom = Math.floor(Math.random() * dice4.length)
        var dice4Rolled = dice4[dice4RolledRandom];
        var dice4Box = document.getElementById("die4")
        if (dice4Rolled === "B3"){
            document.getElementById("die4").style.backgroundColor = "Blue"
            dice4Box.value = "3"
        } else if (dice4Rolled === "G2"){
            document.getElementById("die4").style.backgroundColor = "Green"
            dice4Box.value = "2"
        } else if (dice4Rolled === "R1"){
            document.getElementById("die4").style.backgroundColor = "Red"
            dice4Box.value = "1"
        } else if (dice4Rolled === "Y4"){
            document.getElementById("die4").style.backgroundColor = "Gold"
            dice4Box.value = "4"
        } else if (dice4Rolled === star){
            document.getElementById("die4").style.backgroundColor = "white"
            dice4Box.value = star
        } else if (dice4Rolled === "-1"){
            document.getElementById("die4").style.backgroundColor = "white"
            dice4Box.value = "-1"
        }
    }
     const diceRoller5 = () =>  {
        var star = String.fromCharCode(9733);
        var dice5 = ["R3", "B5", star, "G4", "+1","Y6"];
        var dice5RolledRandom = Math.floor(Math.random() * dice5.length)
        var dice5Rolled = dice5[dice5RolledRandom];
        var dice5Box = document.getElementById("die5")
        if (dice5Rolled === "R3"){
            document.getElementById("die5").style.backgroundColor = "Red"
            dice5Box.value = "3"
        } else if (dice5Rolled === "B5"){
            document.getElementById("die5").style.backgroundColor = "Blue"
            dice5Box.value = "5"
        } else if (dice5Rolled === "G4"){
            document.getElementById("die5").style.backgroundColor = "Green"
            dice5Box.value = "4"
        } else if (dice5Rolled === "Y6"){
            document.getElementById("die5").style.backgroundColor = "Gold"
            dice5Box.value = "6"
        } else if (dice5Rolled === star){
            document.getElementById("die5").style.backgroundColor = "white"
            dice5Box.value = star
        } else if (dice5Rolled === "+1"){
            document.getElementById("die5").style.backgroundColor = "white"
            dice5Box.value = "+1"
        }
    }
     const diceRoller6 = () => {
        var star = String.fromCharCode(9733);
        var dice6 = ["B4", "G3", star, "Y5", "-1","R2"];
        var dice6RolledRandom = Math.floor(Math.random() * dice6.length)
        var dice6Rolled = dice6[dice6RolledRandom];
        var dice6Box = document.getElementById("die6")
        if (dice6Rolled === "B4"){
            document.getElementById("die6").style.backgroundColor = "Blue"
            dice6Box.value = "4"
        } else if (dice6Rolled === "G3"){
            document.getElementById("die6").style.backgroundColor = "Green"
            dice6Box.value = "3"
        } else if (dice6Rolled === "Y5"){
            document.getElementById("die6").style.backgroundColor = "Gold"
            dice6Box.value = "5"
        } else if (dice6Rolled === "R2"){
            document.getElementById("die6").style.backgroundColor = "Red"
            dice6Box.value = "2"
        } else if (dice6Rolled === star){
            document.getElementById("die6").style.backgroundColor = "white"
            dice6Box.value = star
        } else if (dice6Rolled === "-1"){
            document.getElementById("die6").style.backgroundColor = "white"
            dice6Box.value = "-1"
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


     const inputFunction = (inputId) => {
        numberChecker(inputId)
    }

     const numberChecker = (inputId) => { 
        var inputElement = document.getElementById(inputId);
        var number = inputElement.value
        
        if (number === "0"){
            inputElement.value = String.fromCharCode(9733);
        } else if (number > 0 && number < 7){
            inputElement.value = number
        }else{
            inputElement.value = null
        }
    }

  return (
    <body className="pageUno">
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
        <div class="natsTitle"> 
            <h1 class="titleOne"> UNO </h1>
            <h1 class="natsLine">(nat's version)</h1>
        </div>

            <div class="board" id="board1">

                <input class="solidSquare" onInput={() =>inputFunction('box1')} id="box1" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box2')} id="box2" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box3')} id="box3" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box4')} id="box4" maxlength="1"></input>

                <input class="solidSquare" onInput={() =>inputFunction('box5')} id="box5" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box6')} id="box6" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box7')} id="box7" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box8')} id="box8" maxlength="1"></input>

                <input class="solidSquare" onInput={() =>inputFunction('box9')} id="box9" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box10')} id="box10" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box11')} id="box11" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box12')} id="box12" maxlength="1"></input>

                <input class="solidSquare" onInput={() =>inputFunction('box13')} id="box13" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box14')} id="box14" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box15')} id="box15" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box16')} id="box16" maxlength="1"></input>


                <input class="dottedSquare" onClick={() =>squareClicked('box17')} onInput={() =>inputFunction('box17')} clicked="false" id="box17" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box18')} onInput={() =>inputFunction('box18')} clicked="false" id="box18" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box19')} onInput={() =>inputFunction('box19')} clicked="false" id="box19" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box20')} onInput={() =>inputFunction('box20')} clicked="false" id="box20" maxlength="1"></input>
                
                <input class="dottedSquare" onClick={() =>squareClicked('box21')} onInput={() =>inputFunction('box21')} clicked="false" id="box21" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box22')} onInput={() =>inputFunction('box22')} clicked="false" id="box22" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box23')} onInput={() =>inputFunction('box23')} clicked="false" id="box23" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box24')} onInput={() =>inputFunction('box24')} clicked="false" id="box24" maxlength="1"></input>
            </div>

            <div class="board" id="board2">

                <input class="solidSquare" onInput={() =>inputFunction('box31')} id="box31" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box32')} id="box32" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box33')} id="box33" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box34')} id="box34" maxlength="1"></input>

                <input class="solidSquare" onInput={() =>inputFunction('box35')} id="box35" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box36')} id="box36" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box37')} id="box37" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box38')} id="box38" maxlength="1"></input>

                <input class="solidSquare" onInput={() =>inputFunction('box39')} id="box39" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box310')} id="box310" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box311')} id="box311" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box312')} id="box312" maxlength="1"></input>

                <input class="solidSquare" onInput={() =>inputFunction('box313')} id="box313" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box314')} id="box314" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box315')} id="box315" maxlength="1"></input>
                <input class="solidSquare" onInput={() =>inputFunction('box316')} id="box316" maxlength="1"></input>


                <input class="dottedSquare" onClick={() =>squareClicked('box317')} onInput={() =>inputFunction('box317')} clicked="false" id="box317" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box318')} onInput={() =>inputFunction('box318')} clicked="false" id="box318" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box319')} onInput={() =>inputFunction('box319')} clicked="false" id="box319" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box320')} onInput={() =>inputFunction('box320')} clicked="false" id="box320" maxlength="1"></input>
                
                <input class="dottedSquare" onClick={() =>squareClicked('box321')} onInput={() =>inputFunction('box321')} clicked="false" id="box321" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box322')} onInput={() =>inputFunction('box322')} clicked="false" id="box322" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box323')} onInput={() =>inputFunction('box323')} clicked="false" id="box323" maxlength="1"></input>
                <input class="dottedSquare" onClick={() =>squareClicked('box324')} onInput={() =>inputFunction('box324')} clicked="false" id="box324" maxlength="1"></input>

            
            </div>
            <div class="dice">
                <input class="die1" id="die1" onClick={() =>diceSelector('die1')} clicked="false" readonly ></input>
                <input class="die2" id="die2" onClick={() =>diceSelector('die2')} clicked="false" readonly></input>
                <input class="die3" id="die3" onClick={() =>diceSelector('die3')} clicked="false" readonly></input>
                <input class="die4" id="die4" onClick={() =>diceSelector('die4')} clicked="false" readonly></input>
                <input class="die5" id="die5" onClick={() =>diceSelector('die5')} clicked="false" readonly></input>
                <input class="die6" id="die6" onClick={() =>diceSelector('die6')} clicked="false" readonly></input>
                <button onClick={() =>diceRoller()}> roll</button>
            </div>
        </div>
    </body>
  );
}

export default Uno;
