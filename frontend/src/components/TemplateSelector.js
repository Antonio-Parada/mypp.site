import React from 'react';
import './TemplateSelector.css';

const TemplateSelector = ({ onSelectTemplate, currentTemplate }) => {
  return (
    <div className="template-selector">
      <h3>Choose Your Portfolio Layout:</h3>
      <button
        className={currentTemplate === 'grid' ? 'active' : ''}
        onClick={() => onSelectTemplate('grid')}
      >
        Grid Layout
      </button>
      <button
        className={currentTemplate === 'carousel' ? 'active' : ''}
        onClick={() => onSelectTemplate('carousel')}
      >
        Carousel Layout
      </button>
    </div>
  );
};

export default TemplateSelector;