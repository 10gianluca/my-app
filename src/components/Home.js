import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const navSilly = (e) => {
    e.preventDefault();
    navigate('/Silly')

  };

  return (
    <div className="Home">
      <button className="sillyButton" onClick={navSilly}> SILLY</button>
    </div>
  );
}

export default Home;