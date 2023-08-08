import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';
import "./fonts/Merisa-gxvMY.ttf";

function Home() {
  const navigate = useNavigate();
  const navUno = (e) => {
    e.preventDefault();
    navigate('/Uno')
  };
  return (
  <body className="pageHome"> 
    <div className="HomePage">
      <h1 className='title'> HEY BEAUTIFUL </h1>
      <h1 className='subtitle'> WANNA PLAY A GAME</h1>
      <div class="buttonsContainer">
        <button className="sillyButton" id="buttons" onClick={navUno}> UNO</button>
        <button className="boredButton" id="buttons" > QWINTO</button>

      </div>
    </div>
  </body>
  );
}

export default Home;