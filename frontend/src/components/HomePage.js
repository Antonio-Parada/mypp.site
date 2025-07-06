import React from 'react';

const HomePage = () => {
  return (
    <>
      <header className="App-header">
        <h1>AV Professionals Hub</h1>
        <p>Your platform to showcase and manage your media work.</p>
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
    </>
  );
};

export default HomePage;
