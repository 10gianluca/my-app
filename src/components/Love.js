import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import './Love.css';
import "./fonts/Merisa-gxvMY.ttf";

function Love() {
  const images = [
    '/images/cards/card1-1.jpg',
    '/images/cards/card2-1.jpg',
    '/images/cards/card3-1.jpg',
    '/images/cards/card4-1.jpg',
    '/images/cards/card5-1.jpg',
    '/images/cards/card6-1.png',
    '/images/cards/card7-0.png',
    '/images/cards/0.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <body className="pageLove"> 
      <div className="LovePage">
          <div className="leftArrowIcon" onClick={goToPreviousImage}>
              <ArrowLeftOutlined />
          </div>
          <div className='cardRoller'>
              <img className='cardCover' alt="naa" src={process.env.PUBLIC_URL + images[currentImageIndex]}/>
          </div>
          <div className="rightArrowIcon" onClick={goToNextImage}>
              <ArrowRightOutlined />
          </div>
      </div>
    </body>
  );
}

export default Love;
