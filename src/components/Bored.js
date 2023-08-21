import React from 'react';
import { useNavigate } from "react-router-dom";
import './Bored.css';

function Bored() {
  const navigate = useNavigate();
  
  const glInside = ["Bake","Movie", "Old Board Game", "New Board Game", "Puzzle", "Puzzle??", "Ping Pong", "Reality Tv", "Craft", "Cook", "Book", "Video Game", "Nap", "Code", "Workout", "Go Outside", "Cuddle"]
  const glOutsideSummer = ["Explore","Soccer","Golf","Tennis", "Walk", "Bike", "Hike", "Picnic", "Kayak", "Drive", "Shopping","Go Inside", "Thrift"]
  const glOutsideWinter = ["Explore","Tabogan", "Walk", "Fort", "ODR", "Snowman", "Drive", "Shopping", "Thrift", "Go Inside"]
  const aloneInside = ["Clean", "Tv", "Movie", "Puzzle", "Pottery", "Draw", "Paint", "Read", "Music", "Cook", "Bother Stephen", "Code", "Nap", "Video Game", "Go Outside"]
  const aloneOutsideSummer = ["Run", "Walk", "Garden", "Change Bucky's Cage", "Walk Bucky", "Bike", "Read", "Tan", "Kayak", "Go Inside","Thrift"]
  const aloneOutsideWinter = ["Cross Country Ski", "Fort", "Walk", "Snowman", "Drive", "Go Inside","Thrift"]
  const date=["Museum", "Movies", "Cottage", "Dinner", "States", "Sail", "Book", "Escape Room","Breakfast","Ski", "Camping", "Zoo"]

  const changePage = (e) => {
    e.preventDefault();
    navigate('/')
  };

  const startBored = (e) => {
    document.getElementById('boredBtn').style.visibility = 'hidden'
    document.getElementById('DateBtn').style.visibility='initial'
    document.getElementById('aloneBtn').style.visibility = 'initial'
    document.getElementById('glBtn').style.visibility = 'initial'
    document.getElementById('reloadBtn').style.visibility = 'initial'
  };
  const aloneClick = (e) => {
    document.getElementById('aloneBtn').setAttribute('clicked' , "true")
    document.getElementById('aloneBtn').style.visibility = 'hidden'
    document.getElementById('glBtn').style.visibility = 'hidden'
    document.getElementById('outsideBtn').style.visibility = 'initial'
    document.getElementById('insideBtn').style.visibility = 'initial'
    document.getElementById('DateBtn').style.visibility = 'hidden'
  };
  const glClick = (e) => {
    document.getElementById('glBtn').setAttribute('clicked' , "true")
    document.getElementById('aloneBtn').style.visibility = 'hidden'
    document.getElementById('glBtn').style.visibility = 'hidden'
    document.getElementById('outsideBtn').style.visibility = 'initial'
    document.getElementById('insideBtn').style.visibility = 'initial'
    document.getElementById('DateBtn').style.visibility = 'hidden'

  };
  const DateClick = (e) => {
    document.getElementById('DateBtn').setAttribute('clicked' , "true")
    document.getElementById('aloneBtn').style.visibility = 'hidden'
    document.getElementById('DateBtn').style.visibility = 'hidden'
    document.getElementById('glBtn').style.visibility = 'hidden'
    document.getElementById('answer').style.visibility = 'visible'
    const randomIndex = Math.floor(Math.random() * date.length);
    var answer1 = date[randomIndex];
    document.getElementById('answer').textContent  = answer1
  }
  const outsideClick = (e) => {
    document.getElementById('outsideBtn').setAttribute('clicked' , "true")
    document.getElementById('outsideBtn').style.visibility = 'hidden'
    document.getElementById('insideBtn').style.visibility = 'hidden'
    document.getElementById('winterBtn').style.visibility = 'initial'
    document.getElementById('summerBtn').style.visibility = 'initial'
  };
  const insideClick = (e) => {
    document.getElementById('insideBtn').setAttribute('clicked' , "true")
    document.getElementById('outsideBtn').style.visibility = 'hidden'
    document.getElementById('insideBtn').style.visibility = 'hidden'
    if (document.getElementById('aloneBtn').getAttribute('clicked')==='true'){
      document.getElementById('answer').style.visibility = 'visible'
      const randomIndex = Math.floor(Math.random() * aloneInside.length);
      var answer1 = aloneInside[randomIndex];
      document.getElementById('answer').textContent  = answer1
    }else{
      document.getElementById('answer').style.visibility = 'visible'
      const randomIndex = Math.floor(Math.random() * glInside.length);
      var answer2 = glInside[randomIndex];
      document.getElementById('answer').textContent  = answer2
    }

  };

  const winterClick = (e) => {
    document.getElementById('winterBtn').setAttribute('clicked' , "true")
    document.getElementById('summerBtn').style.visibility = 'hidden'
    document.getElementById('winterBtn').style.visibility = 'hidden'
    if (document.getElementById('aloneBtn').getAttribute('clicked')==='true'){
      document.getElementById('answer').style.visibility = 'visible'
      const randomIndex = Math.floor(Math.random() * aloneOutsideWinter.length);
      var answer3 = aloneOutsideWinter[randomIndex];
      document.getElementById('answer').textContent  = answer3
    }else{
      document.getElementById('answer').style.visibility = 'visible'
      const randomIndex = Math.floor(Math.random() * glOutsideWinter.length);
      var answer4 = glOutsideWinter[randomIndex];
      document.getElementById('answer').textContent  = answer4
    }
  };

  const summerClick = (e) => {
    document.getElementById('summerBtn').setAttribute('clicked' , "true")
    document.getElementById('summerBtn').style.visibility = 'hidden'
    document.getElementById('winterBtn').style.visibility = 'hidden'
    if (document.getElementById('aloneBtn').getAttribute('clicked')==='true'){
      document.getElementById('answer').style.visibility = 'visible'
      const randomIndex = Math.floor(Math.random() * aloneOutsideSummer.length);
      var answer5 = aloneOutsideSummer[randomIndex];
      document.getElementById('answer').textContent  = answer5
    }else{
      document.getElementById('answer').style.visibility = 'visible'
      const randomIndex = Math.floor(Math.random() * glOutsideSummer.length);
      var answer6 = glOutsideSummer[randomIndex];
      document.getElementById('answer').textContent  = answer6
    }
  };


  const reloadClick = (e) => {
    window.location.reload(true)
  };


  return (
    <body className="pageBored">
      <div className="Bored">
        <nav className='navBar'>
          <div className="buttonContainer">
            <button className='button' id='homeButton' onClick={changePage}>HOME</button>
          </div>
        </nav>
        <header className="Bored-header">
          <img className='boredBackground' src='' alt="" />
        </header>
        <div className='ButtonList'>
            <button clicked='false' className='button' id='boredBtn' onClick={startBored}>Bored?</button>
            <button clicked='false' className='button' id='aloneBtn' onClick={aloneClick}>Alone</button>
            <button clicked='false' className='button' id='glBtn' onClick={glClick}>With GL</button>
            <button clicked='false' className='button' id='DateBtn' onClick={DateClick}>Date</button>
            <button clicked='false' className='button' id='outsideBtn' onClick={outsideClick}>Outside</button>
            <button clicked='false' className='button' id='insideBtn' onClick={insideClick}>Inside</button>
            <button clicked='false' className='button' id='winterBtn' onClick={winterClick} >Winter</button>
            <button clicked='false' className='button' id='summerBtn' onClick={summerClick}>Summer</button>
            <button className='button' id='answer' readonly></button>
            <button clicked='false' className='button' id='reloadBtn' onClick={reloadClick}>Reload</button>          
        </div>
      </div>
    </body>
  );
}

export default Bored;
