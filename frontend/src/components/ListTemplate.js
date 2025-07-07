import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import sampleMedia from '../data/sampleMedia';
import templateFlavors from '../data/templateFlavors';
import MediaEmbed from './MediaEmbed';
import './ListTemplate.css';

const ListTemplate = () => {
  const { flavorId } = useParams();
  const flavor = templateFlavors.list.find(f => f.id === flavorId);

  if (!flavor) {
    return <div className="list-template-page"><h1>Template Not Found</h1><p>The specified list template flavor does not exist.</p></div>;
  }

  return (
    <div className="list-template-page">
      <h1>{flavor.name} List Portfolio</h1>
      <p>{flavor.description}</p>
      <div className="project-list">
        {sampleMedia.map((media, index) => (
          <motion.div
            key={media.id}
            className="list-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
          >
            {flavor.config.showThumbnails && (
              <div className="list-item-thumbnail">
                <MediaEmbed media={{ ...media, url: media.thumbnail || media.url }} />
              </div>
            )}
            <div className="list-item-content">
              <h3>{media.title}</h3>
              {flavor.config.showDescription && <p>{media.description}</p>}
              {flavor.config.expanded && (
                <div className="list-item-full-media">
                  <MediaEmbed media={media} />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ListTemplate;