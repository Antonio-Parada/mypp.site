import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to AV Professionals Hub</h1>
        <p>Showcase your media work easily with beautiful templates.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Beautiful Templates</h3>
            <p>Choose from a variety of stunning, responsive templates designed for audio-visual content.</p>
          </div>
          <div className="feature-item">
            <h3>Easy Media Uploads</h3>
            <p>Effortlessly upload your videos, images, and audio files.</p>
          </div>
          <div className="feature-item">
            <h3>Intelligent Spacing & Hosting</h3>
            <p>Your work is presented perfectly with optimized layouts and reliable hosting.</p>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2025 AV Professionals Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;