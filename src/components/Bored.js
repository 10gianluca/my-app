import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Bored.css';

function Bored() {
  const [photoOfNat, setPhotoOfNat] = useState('');
  const [boredStarted, setBoredStarted] = useState(false); 
  const navigate = useNavigate();

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
    document.getElementById('aloneBtn').style.visibility = 'hidden'
    document.getElementById('glBtn').style.visibility = 'hidden'
    document.getElementById('outsideBtn').style.visibility = 'initial'
    document.getElementById('insideBtn').style.visibility = 'initial'
  };
  const glClick = (e) => {
    document.getElementById('aloneBtn').style.visibility = 'hidden'
    document.getElementById('glBtn').style.visibility = 'hidden'
    document.getElementById('outsideBtn').style.visibility = 'initial'
    document.getElementById('insideBtn').style.visibility = 'initial'
  };
  const outsideClick = (e) => {
    document.getElementById('outsideBtn').style.visibility = 'hidden'
    document.getElementById('insideBtn').style.visibility = 'hidden'
    document.getElementById('winterBtn').style.visibility = 'initial'
    document.getElementById('summerBtn').style.visibility = 'initial'
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
            <button className='button' id='boredBtn' onClick={startBored}>Bored?</button>
            <button className='button' id='aloneBtn' onClick={aloneClick}>Alone</button>
            <button className='button' id='glBtn' onClick={glClick}>With GL</button>
            <button className='button' id='outsideBtn' onClick={outsideClick}>Outside</button>
            <button className='button' id='insideBtn' onClick={startBored}>Inside</button>
            <button className='button' id='winterBtn' onClick={startBored} >Winter</button>
            <button className='button' id='summerBtn' onClick={startBored}>Summer</button>
            <button className='button' id='reloadBtn' onClick={reloadClick}>Reload</button>          
          </div>
      </div>
    </body>
  );
}

export default Bored;
