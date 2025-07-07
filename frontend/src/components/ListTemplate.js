import React from 'react';
import { useParams } from 'react-router-dom';
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
        {sampleMedia.map((media) => (
          <div key={media.id} className="list-item">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTemplate;