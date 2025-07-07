import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
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
        gridTemplateColumns: flavor.config.columns === 'auto-fit' ? 'repeat(auto-fit, minmax(280px, 1fr))' : `repeat(${flavor.config.columns}, 1fr)`,
        gap: flavor.config.gap,
      }}>
        {sampleMedia.map((media, index) => (
          <motion.div
            key={media.id}
            className={`grid-item ${flavor.config.cardStyle ? 'card-style' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: flavor.config.itemShadow || '0 8px 16px rgba(0,0,0,0.2)' }}
            style={{
              aspectRatio: flavor.config.aspectRatio || 'auto',
              backgroundColor: flavor.config.itemBg,
              boxShadow: flavor.config.itemShadow,
              borderRadius: flavor.config.itemBorderRadius,
              border: flavor.config.itemBorder,
            }}
          >
            <div className="media-wrapper">
              <MediaEmbed media={media} />
            </div>
            <div className="item-details">
              <h3 style={{ color: flavor.config.titleColor }}>{media.title}</h3>
              <p style={{ color: flavor.config.descriptionColor }}>{media.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GridTemplate;