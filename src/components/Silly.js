import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Silly.css';

function Silly() {
  const [photoOfNat, setPhotoOfNat] = useState('');
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

  return (
  <body className="pageSilly">
    <div className="Silly">
        <nav className='navBar'>
          <div className="buttonContainer">
            <button className='button' id='homeButton' onClick={changePage}>HOME</button>
          </div>
        </nav>
        <header className="Silly-header">
          <video className='videoTag1' autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + '/images/photo77.mp4'} alt="naa" type='video/mp4' />
          </video>
          <video className='videoTag2' autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + '/images/photo77.mp4'} alt="naa" type='video/mp4' />
          </video>
          <video className='videoTag3' autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + '/images/photo77.mp4'} alt="naa" type='video/mp4' />
          </video>
          <video className='videoTag4' autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + '/images/photo77.mp4'} alt="naa" type='video/mp4' />
          </video>
          <img alt="naa"
            src={process.env.PUBLIC_URL + '/images/NotGoodPhotos/' + photoOfNat}
          />
        </header>
    </div>
  </body>
  );
}

export default Silly;