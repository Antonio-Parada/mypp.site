import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const mediaItems = [
    {
      id: 1,
      type: 'video',
      title: 'Cinematic Reel 2024',
      thumbnail: 'https://via.placeholder.com/300x200?text=Video+Thumbnail',
      description: 'A compilation of my best cinematic work from various projects.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder YouTube embed
    },
    {
      id: 2,
      type: 'image',
      title: 'Event Photography Highlights',
      thumbnail: 'https://via.placeholder.com/300x200?text=Image+Thumbnail',
      description: 'Capturing the essence of live events with dynamic shots.',
      url: 'https://via.placeholder.com/800x600?text=Full+Image'
    },
    {
      id: 3,
      type: 'audio',
      title: 'Sound Design Showcase',
      thumbnail: 'https://via.placeholder.com/300x200?text=Audio+Thumbnail',
      description: 'Original soundscapes and foley work for film and games.',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' // Placeholder MP3
    },
  ];

  return (
    <section className="portfolio-section">
      <h2>My Work</h2>
      <div className="portfolio-grid">
        {mediaItems.map(item => (
          <div key={item.id} className="portfolio-item">
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
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
