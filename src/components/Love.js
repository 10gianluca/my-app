import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import './Love.css';
import "./fonts/Merisa-gxvMY.ttf";

function Love() {
  const navigate = useNavigate();

  const card1Images = [
    '/images/cards/card1-1.jpg',
    '/images/cards/card1-2.jpg',
  ]

  const card2Images = [
    '/images/cards/card2-1.jpg',
    '/images/cards/card2-2.jpg',
    '/images/cards/card2-3.jpg',
    '/images/cards/card2-4.jpg',
    '/images/cards/card2-5.jpg',
  ]

  const card3Images = [
    '/images/cards/card3-1.jpg',
    '/images/cards/card3-2.jpg',
  ]

  const card4Images = [
    '/images/cards/card4-1.jpg',
    '/images/cards/card4-2.jpg',
    '/images/cards/card4-3.jpg',
  ]

  const card5Images = [
    '/images/cards/card5-1.jpg',
    '/images/cards/card5-2.jpg',
  ]

  const card6Images = [
    '/images/cards/card6-1.png',
    '/images/cards/card6-2.png',
    '/images/cards/card6-3.png',
    '/images/cards/card6-4.png',
    '/images/cards/card6-5.png',
    '/images/cards/card6-6.png',
  ]

  const card7Images = [
    '/images/cards/card7-0.png',
    '/images/cards/card7-1.png',
    '/images/cards/card7-2.png',
    '/images/cards/card7-3.png',
    '/images/cards/card7-4.png',
    '/images/cards/card7-5.png',
    '/images/cards/card7-6.png',
    '/images/cards/card7-7.png',
    '/images/cards/card7-8.png',
  ]
  const generateCard8Images = () => {
    const card8Images = [];
  
    for (let i = 1; i <= 100; i++) {
      card8Images.push(`/images/cards/1-100/${i}.jpg`);
    }
  
    return card8Images;
  };

  const card8Images = generateCard8Images();


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
  const [imagesLength, setImagesLength] = useState(8);

  const changePage = (e) => {
    e.preventDefault();
    navigate('/')
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + imagesLength) % imagesLength);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagesLength);
  };

  const cardClick = (e) => {
    const clickedImageSrc = e.target.getAttribute('src');
    const imageName = clickedImageSrc.split('/').pop();
    document.getElementById('cardCovers').style.visibility = 'hidden'
    if (imageName === "card1-1.jpg"){
      setImagesLength(2)
      document.getElementById('card1').style.visibility = 'inherit'
    }
    else if (imageName === "card2-1.jpg"){
      setImagesLength(5)
      document.getElementById('card2').style.visibility = 'inherit'
    }
    else if (imageName === "card3-1.jpg"){
      setImagesLength(2)
      document.getElementById('card3').style.visibility = 'inherit'
    } 
    else if (imageName === "card4-1.jpg"){
      setImagesLength(3)
      document.getElementById('card4').style.visibility = 'inherit'
    } 
    else if (imageName === "card5-1.jpg"){
      setImagesLength(2)
      document.getElementById('card5').style.visibility = 'inherit'
    } 
    else if (imageName === "card6-1.png"){
      setImagesLength(6)
      document.getElementById('card6').style.visibility = 'inherit'
    }    
    else if (imageName === "card7-0.png"){
      setImagesLength(9)
      document.getElementById('card7').style.visibility = 'inherit'
    }     
    else if (imageName === "0.png"){
      setImagesLength(100)
      document.getElementById('card8').style.visibility = 'inherit'
    } 
  }
  const reloadClick = (e) => {
    window.location.reload(true)
  };


  return (
    <body className="pageLove">
        <nav className='navBar'>
          <div className="buttonContainer">
            <button className='button' id='homeButton' onClick={changePage}>HOME</button>
          </div>
        </nav>
          <div className="leftArrowIcon" onClick={goToPreviousImage}>
              <ArrowLeftOutlined />
          </div>
          <div className='cardRoller'>
              <img className='cardCover' id="cardCovers" alt="naa" onClick={cardClick} src={process.env.PUBLIC_URL + images[currentImageIndex]}/>
              <img className='cardCover' id='card1' alt="naa" src={process.env.PUBLIC_URL + card1Images[currentImageIndex]}/>
              <img className='cardCover' id='card2' alt="naa" src={process.env.PUBLIC_URL + card2Images[currentImageIndex]}/>
              <img className='cardCover' id='card3' alt="naa" src={process.env.PUBLIC_URL + card3Images[currentImageIndex]}/>
              <img className='cardCover' id='card4' alt="naa" src={process.env.PUBLIC_URL + card4Images[currentImageIndex]}/>
              <img className='cardCover' id='card5' alt="naa" src={process.env.PUBLIC_URL + card5Images[currentImageIndex]}/>
              <img className='cardCover' id='card6' alt="naa" src={process.env.PUBLIC_URL + card6Images[currentImageIndex]}/>
              <img className='cardCover' id='card7' alt="naa" src={process.env.PUBLIC_URL + card7Images[currentImageIndex]}/>
              <img className='cardCover' id='card8' alt="naa" src={process.env.PUBLIC_URL + card8Images[currentImageIndex]}/>
          </div>
          <div className="rightArrowIcon" onClick={goToNextImage}>
              <ArrowRightOutlined />
          </div>
          <button className='button' id='reloadBtnCard' onClick={reloadClick}>Reload</button>          
    </body>
  );
}

export default Love;
