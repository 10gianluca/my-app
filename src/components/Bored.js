import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Bored.css';

function Bored() {
  const [photoOfNat, setPhotoOfNat] = useState('');
  const [boredStarted, setBoredStarted] = useState(false); 
  const navigate = useNavigate();
  
  const glInside = ["Movie", "Old Board Game", "New Board Game", "Puzzle", "Ping Pong", "Reality Tv", "Craft", "Cook", "Video Game", "Nap", "Code", "Workout", "Go Outside"]
  const glOutsideSummer = ["Soccer", "Tennis", "Walk", "Bike", "Hike", "Picnic", "Kayak", "Drive", "Shopping", "Go Inside"]
  const glOutsideWinter = ["Tabogan", "Walk", "Fort", "ODR", "Snowman", "Drive", "Shopping", "Go Inside"]
  const aloneInside = ["Clean", "Tv", "Movie", "Puzzle", "Pottery", "Draw", "Paint", "Read", "Music", "Cook", "Bother Stephen", "Code", "Nap", "Video Game", "Go Outside"]
  const aloneOutsideSummer = ["Run", "Walk", "Garden", "Change Bucky's Cage", "Walk Bucky", "Bike", "Read", "Tan", "Kayak", "Go Inside"]
  const aloneOutsideWinter = ["Cross Country Ski", "Fort", "Walk", "Snowman", "Drive", "Go Inside"]


  useEffect(() => {
    const badImageNames = Array.from({ length: 11 }, (_, index) => `photo${index + 1}.jpg`);

    const interval = setInterval(() => {
      const randomPhoto = badImageNames[Math.floor(Math.random() * badImageNames.length)];
      setPhotoOfNat(randomPhoto);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const changePage = (e) => {
    e.preventDefault();
    navigate('/')
  };

  const startBored = (e) => {
    document.getElementById('boredBtn').style.visibility = 'hidden'
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
  };
  const glClick = (e) => {
    document.getElementById('glBtn').setAttribute('clicked' , "true")
    document.getElementById('aloneBtn').style.visibility = 'hidden'
    document.getElementById('glBtn').style.visibility = 'hidden'
    document.getElementById('outsideBtn').style.visibility = 'initial'
    document.getElementById('insideBtn').style.visibility = 'initial'
  };
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

  };

  const winterClick = (e) => {
    document.getElementById('winterBtn').setAttribute('clicked' , "true")
    document.getElementById('summerBtn').style.visibility = 'hidden'
    document.getElementById('winterBtn').style.visibility = 'hidden'

  };

  const summerClick = (e) => {
    document.getElementById('summerBtn').setAttribute('clicked' , "true")
    document.getElementById('summerBtn').style.visibility = 'hidden'
    document.getElementById('winterBtn').style.visibility = 'hidden'

  };


  const reloadClick = (e) => {
    window.location.reload(false)
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
            <button clicked='false' className='button' id='outsideBtn' onClick={outsideClick}>Outside</button>
            <button clicked='false' className='button' id='insideBtn' onClick={insideClick}>Inside</button>
            <button clicked='false' className='button' id='winterBtn' onClick={winterClick} >Winter</button>
            <button clicked='false' className='button' id='summerBtn' onClick={summerClick}>Summer</button>
            <button clicked='false' className='button' id='reloadBtn' onClick={reloadClick}>Reload</button>          
          </div>
      </div>
    </body>
  );
}

export default Bored;
