import React, { useState } from 'react';
import './Portfolio.css';
import TemplateSelector from './TemplateSelector';
import CarouselPortfolio from './CarouselPortfolio';
import ListPortfolio from './ListPortfolio';
import MediaDetailModal from './MediaDetailModal'; // Import the new modal component

const Portfolio = () => {
  const [currentTemplate, setCurrentTemplate] = useState('grid');
  const [selectedMedia, setSelectedMedia] = useState(null); // State to hold the selected media item for the modal

  const mediaItems = [
    {
      id: 1,
      type: 'video',
      title: 'Cinematic Reel 2024',
      thumbnail: 'https://via.placeholder.com/400x225?text=Video+Reel', // 16:9 aspect ratio
      description: 'A dynamic compilation of my best cinematic work, showcasing diverse projects and styles.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube embed
    },
    {
      id: 2,
      type: 'image',
      title: 'Urban Landscape Photography',
      thumbnail: 'https://via.placeholder.com/400x300?text=Urban+Photo', // 4:3 aspect ratio
      description: 'Capturing the raw beauty and intricate details of cityscapes at dusk.',
      url: 'https://via.placeholder.com/1200x900?text=Full+Urban+Image',
    },
    {
      id: 3,
      type: 'audio',
      title: 'Podcast Intro & Outro',
      thumbnail: 'https://via.placeholder.com/400x400?text=Audio+Waveform', // 1:1 aspect ratio
      description: 'Custom-designed audio branding for podcasts, focusing on clarity and impact.',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Placeholder MP3
    },
    {
      id: 4,
      type: 'video',
      title: 'Product Animation Showcase',
      thumbnail: 'https://via.placeholder.com/400x225?text=Product+Animation', // 16:9 aspect ratio
      description: '3D animation and motion graphics for product visualization and marketing.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Another placeholder YouTube embed
    },
    {
      id: 5,
      type: 'image',
      title: 'Portrait Series: Faces of the City',
      thumbnail: 'https://via.placeholder.com/300x400?text=Portrait+Photo', // 3:4 aspect ratio
      description: 'An intimate collection of portraits, exploring the diverse personalities of urban dwellers.',
      url: 'https://via.placeholder.com/900x1200?text=Full+Portrait+Image',
    },
    {
      id: 6,
      type: 'audio',
      title: 'Film Score Excerpt',
      thumbnail: 'https://via.placeholder.com/400x400?text=Music+Notes', // 1:1 aspect ratio
      description: 'An evocative excerpt from an original film score, blending orchestral and electronic elements.',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // Another placeholder MP3
    },
  ];

  const handleTemplateSelect = (template) => {
    setCurrentTemplate(template);
  };

  const handleItemClick = (item) => {
    setSelectedMedia(item);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section className="portfolio-section">
      <h2>My Work</h2>
      <TemplateSelector onSelectTemplate={handleTemplateSelect} currentTemplate={currentTemplate} />
      
      {currentTemplate === 'grid' && (
        <div className="portfolio-grid">
          {mediaItems.map(item => (
            <div key={item.id} className="portfolio-item" onClick={() => handleItemClick(item)}> {/* Make item clickable */}
              <div className="media-container">
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
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {/* <button className="view-details-button">View Details</button> */}
              </div>
            </div>
          ))}
        </div>
      )}

      {currentTemplate === 'carousel' && (
        <CarouselPortfolio mediaItems={mediaItems} onItemClick={handleItemClick} />
      )}

      {currentTemplate === 'list' && (
        <ListPortfolio mediaItems={mediaItems} onItemClick={handleItemClick} />
      )}

      {selectedMedia && (
        <MediaDetailModal mediaItem={selectedMedia} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Portfolio;
