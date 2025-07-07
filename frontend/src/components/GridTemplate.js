import React from 'react';
import './GridTemplate.css';

const GridTemplate = () => {
  return (
    <div className="grid-template-page">
      <h1>Grid Portfolio Template</h1>
      <p>This template showcases your media in a clean, responsive grid layout.</p>
      <div className="grid-container">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="grid-item">
            <img src={`https://via.placeholder.com/200x150?text=Grid+Item+${index + 1}`} alt={`Grid Item ${index + 1}`} />
            <p>Project Title {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTemplate;