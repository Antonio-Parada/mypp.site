import React from 'react';
import './MediaEmbed.css';

const MediaEmbed = ({ media }) => {
  if (!media) return null;

  switch (media.type) {
    case 'video':
      if (media.source === 'youtube') {
        return (
          <div className="video-responsive">
            <iframe
              src={media.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={media.title}
            ></iframe>
          </div>
        );
      } else if (media.source === 'vimeo') {
        return (
          <div className="video-responsive">
            <iframe
              src={media.url}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={media.title}
            ></iframe>
          </div>
        );
      }
      return null; // Unsupported video source
    case 'image':
      return <img src={media.url} alt={media.title} className="media-image" />;
    case 'audio':
      return (
        <audio controls className="media-audio">
          <source src={media.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );
    default:
      return <p>Unsupported media type.</p>;
  }
};

export default MediaEmbed;
