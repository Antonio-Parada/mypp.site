import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import sampleMedia from '../data/sampleMedia';
import templateFlavors from '../data/templateFlavors';
import MediaEmbed from './MediaEmbed';
import './CarouselTemplate.css';

const CarouselTemplate = () => {
  const { flavorId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flavor = templateFlavors.carousel.find(f => f.id === flavorId);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleMedia.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sampleMedia.length) % sampleMedia.length);
  };

  return (
    <div className="carousel-template-page">
      <h1>{flavor.name} Carousel Portfolio</h1>
      <p>{flavor.description}</p>
      <div className="carousel-container">
        <button onClick={goToPrevious} className="carousel-button prev">&#10094;</button>
        <MediaEmbed media={sampleMedia[currentIndex]} />
        <button onClick={goToNext} className="carousel-button next">&#10095;</button>
      </div>
      <div className="carousel-dots">
        {sampleMedia.map((_, index) => (
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