import React from 'react';
import './ListPortfolio.css';

const ListPortfolio = ({ mediaItems }) => {
  return (
    <div className="list-portfolio">
      {mediaItems.map(item => (
        <div key={item.id} className="list-item">
          <div className="list-media-container">
            {item.type === 'video' && (
              <iframe
                src={item.url}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {item.type === 'image' && (
              <img src={item.thumbnail} alt={item.title} />
            )}
            {item.type === 'audio' && (
              <audio controls src={item.url}></audio>
            )}
          </div>
          <div className="list-item-details">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="view-details-button">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListPortfolio;
