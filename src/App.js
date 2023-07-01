import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [photoOfNat, setPhotoOfNat] = useState('');

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

function changePage(){
  alert('hello')
}

  return (
    <div className="App">
      <nav className='navBar'>
        <div className="buttonContainer">
          <button className='button' id='homeButton' onClick={changePage}>HOME</button>
        </div>
      </nav>
      <header className="App-header">
        <video className='videoTag1' autoPlay loop muted>
          <source src={process.env.PUBLIC_URL + '/images/photo77.mp4'} type='video/mp4' />
        </video>
        <video className='videoTag2' autoPlay loop muted>
          <source src={process.env.PUBLIC_URL + '/images/photo77.mp4'} type='video/mp4' />
        </video>
        <video className='videoTag3' autoPlay loop muted>
          <source src={process.env.PUBLIC_URL + '/images/photo77.mp4'} type='video/mp4' />
        </video>
        <video className='videoTag4' autoPlay loop muted>
          <source src={process.env.PUBLIC_URL + '/images/photo77.mp4'} type='video/mp4' />
        </video>
        <img
          src={process.env.PUBLIC_URL + '/images/NotGoodPhotos/' + photoOfNat}
        />
      </header>
    </div>
  );
}

export default App;