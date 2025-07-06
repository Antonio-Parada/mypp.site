import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const HomePage = () => {
  return (
    <>
      <header className="App-header">
        <h1>Showcase Your AV Brilliance</h1>
        <p>The premier platform for Audio-Visual Professionals to display, manage, and share their media work with stunning ease.</p>
        <div className="cta-buttons">
          <Link to="/portfolio" className="cta-button">Explore Portfolios</Link>
          <Link to="/upload" className="cta-button secondary">Upload Your Work</Link>
        </div>
      </header>
      <section className="features">
        <h2>Why Choose AV Professionals Hub?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Stunning Templates</h3>
            <p>Present your videos, images, and audio with professionally designed, responsive templates that make your work shine.</p>
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