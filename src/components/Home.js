import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';
import "./fonts/Merisa-gxvMY.ttf";

function Home() {
  const navigate = useNavigate();
  const navSilly = (e) => {
    e.preventDefault();
    navigate('/Silly')
  };
  const navBored = (e) => {
    e.preventDefault();
    navigate('/Bored')
  };
  const navBoard = (e) => {
    e.preventDefault();
    navigate('/Board')
  };
  const navLove = (e) => {
    e.preventDefault();
    navigate('/Love')
  };
  return (
  <body className="pageHome"> 
    <div className="HomePage">
      <h1 className='title'> Happy 3 year anniversary </h1>
      <h1 className='natName'> Nathalie</h1>
      <h1 className='subtitle'> I Love You</h1>
      <div class="buttonsContainer">
        <button className="sillyButton" id="buttons" onClick={navSilly}> SILLY</button>
        <button className="boredButton" id="buttons" onClick={navBored}> BORED</button>
        <button className="BoardButton" id="buttons" onClick={navBoard}> BOARD</button>
        <button className="loveButton" id="buttons" onClick={navLove}> LOVE</button>
      </div>
    </div>
  </body>
  );
}

export default Home;