import React from 'react';
import { useParams } from 'react-router-dom';
import sampleMedia from '../data/sampleMedia';
import templateFlavors from '../data/templateFlavors';
import MediaEmbed from './MediaEmbed';
import './GridTemplate.css';

const GridTemplate = () => {
  const { flavorId } = useParams();
  const flavor = templateFlavors.grid.find(f => f.id === flavorId);

  if (!flavor) {
    return <div className="grid-template-page"><h1>Template Not Found</h1><p>The specified grid template flavor does not exist.</p></div>;
  }

  return (
    <div className="grid-template-page">
      <h1>{flavor.name} Grid Portfolio</h1>
      <p>{flavor.description}</p>
      <div className="grid-container" style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${flavor.config.cardStyle ? '250px' : '200px'}, 1fr))`, // Adjust based on cardStyle
        gap: flavor.config.gap,
      }}>
        {sampleMedia.map((media, index) => (
          <div key={media.id} className="grid-item" style={{
            aspectRatio: flavor.config.aspectRatio || 'auto',
            // Add more style adjustments based on flavor.config
          }}>
            <MediaEmbed media={media} />
            <h3>{media.title}</h3>
            <p>{media.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTemplate;