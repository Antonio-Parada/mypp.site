import React, { useState } from 'react';
import './CarouselTemplate.css';

const CarouselTemplate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://via.placeholder.com/600x400?text=Carousel+Image+1',
    'https://via.placeholder.com/600x400?text=Carousel+Image+2',
    'https://via.placeholder.com/600x400?text=Carousel+Image+3',
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-template-page">
      <h1>Carousel Portfolio Template</h1>
      <p>This template provides an engaging, interactive display for your featured work.</p>
      <div className="carousel-container">
        <button onClick={goToPrevious} className="carousel-button prev">&#10094;</button>
        <img src={images[currentIndex]} alt="Carousel Item" className="carousel-image" />
        <button onClick={goToNext} className="carousel-button next">&#10095;</button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselTemplate;