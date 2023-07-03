import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';
import "./fonts/Merisa-gxvMY.ttf";

function Home() {
  const navigate = useNavigate();
  const navSilly = (e) => {
    e.preventDefault();
    navigate('/Silly')
  };

  return (
  <body className="pageHome"> 
    <div className="HomePage">
      <h1 className='title'> Happy 3 year anniversary </h1>
      <h1 className='natName'> Nathalie</h1>
      <h1 className='subtitle'> I Love You</h1>
      <div class="buttonsContainer">
        <button className="sillyButton" id="buttons" onClick={navSilly}> SILLY</button>
        <button className="boredButton" id="buttons" onClick={navSilly}> BORED</button>
        <button className="happyButton" id="buttons" onClick={navSilly}> HAPPY</button>
        <button className="sadButton" id="buttons" onClick={navSilly}> SAD</button>
      </div>
    </div>
  </body>
  );
}

export default Home;