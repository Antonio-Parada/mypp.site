import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // New CSS for HomePage specific styles

const HomePage = () => {
  const names = ["PRODUCTION", "PERSONAL", "PROFESSIONAL"];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 3000); // Change name every 3 seconds
    return () => clearInterval(interval);
  }, [names.length]);

  return (
    <>
      <header className="App-header">
        <h1>MY <span className="dynamic-name">{names[currentNameIndex]}</span> PORTFOLIO</h1>
        <p>The premier platform for Audio-Visual Professionals to display, manage, and share their media work with stunning ease.</p>
        <div className="cta-buttons">
          <Link to="/login" className="cta-button">Get Started</Link>
          <Link to="/signup" className="cta-button secondary">Sign Up</Link>
        </div>
      </header>

      <section className="template-showcase">
        <h2>Beautiful Templates for Your Work</h2>
        <div className="template-grid">
          <div className="template-preview">
            <h3>Grid Layout</h3>
            <img src="https://via.placeholder.com/300x200?text=Grid+Template" alt="Grid Template Preview" />
            <p>Classic and clean, perfect for diverse media.</p>
          </div>
          <div className="template-preview">
            <h3>Carousel Layout</h3>
            <img src="https://via.placeholder.com/300x200?text=Carousel+Template" alt="Carousel Template Preview" />
            <p>Engaging, interactive display for featured work.</p>
          </div>
          <div className="template-preview">
            <h3>List Layout</h3>
            <img src="https://via.placeholder.com/300x200?text=List+Template" alt="List Template Preview" />
            <p>Detailed view for project descriptions and context.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose My Portfolio?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>YouTube Integration</h3>
            <p>Simply paste your YouTube link, and we'll automatically embed your video into your portfolio.</p>
          </div>
          <div className="feature-item">
            <h3>Effortless Uploads</h3>
            <p>Intuitively upload and organize your media files with intelligent spacing and robust hosting for optimal performance.</p>
          </div>
          <div className="feature-item">
            <h3>Reliable & Fast</h3>
            <p>Benefit from high uptime and fast loading speeds, ensuring your audience experiences your work without interruption.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
