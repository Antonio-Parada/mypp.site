import React from 'react';
import './MediaDetailModal.css';

const MediaDetailModal = ({ mediaItem, onClose }) => {
  if (!mediaItem) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <h2>{mediaItem.title}</h2>
        <div className="modal-media-display">
          {mediaItem.type === 'video' && (
            <iframe
              src={mediaItem.url}
              title={mediaItem.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {mediaItem.type === 'image' && (
            <img src={mediaItem.url} alt={mediaItem.title} />
          )}
          {mediaItem.type === 'audio' && (
            <audio controls src={mediaItem.url}></audio>
          )}
        </div>
        <p className="modal-description">{mediaItem.description}</p>
        {/* Additional details would go here */}
        <div className="modal-additional-info">
          <p><strong>Type:</strong> {mediaItem.type}</p>
          {/* Backend Annotation: This is where additional details fetched from a backend would be displayed. */}
          {/* For example: */}
          {/* <p><strong>Client:</strong> Acme Corp</p> */}
          {/* <p><strong>Project Date:</strong> 2024-05-15</p> */}
          {/* <p><strong>Tags:</strong> #cinematic, #corporate, #branding</p> */}
        </div>
      </div>
    </div>
  );
};

export default MediaDetailModal;
