import React, { useState } from 'react';
import './CarouselPortfolio.css';

const CarouselPortfolio = ({ mediaItems, onItemClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="carousel-portfolio">
      <div className="carousel-display">
        <button onClick={goToPrevious} className="carousel-nav prev">&lt;</button>
        <div className="carousel-item-display" onClick={() => onItemClick(currentItem)}> {/* Make item clickable */}
          {currentItem.type === 'video' && (
            <iframe
              src={currentItem.url}
              title={currentItem.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {currentItem.type === 'image' && (
            <img src={currentItem.thumbnail} alt={currentItem.title} />
          )}
          {currentItem.type === 'audio' && (
            <audio controls src={currentItem.url}></audio>
          )}
        </div>
        <button onClick={goToNext} className="carousel-nav next">&gt;</button>
      </div>
      <div className="carousel-details">
        <h3>{currentItem.title}</h3>
        <p>{currentItem.description}</p>
        {/* <button className="view-details-button">View Details</button> */}
      </div>
    </div>
  );
};

export default CarouselPortfolio;
