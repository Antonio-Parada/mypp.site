import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // Import the logo

import TemplateCard from './TemplateCard';
import templateFlavors from '../data/templateFlavors'; // Import templateFlavors
import './HomePage.css'; // New CSS for HomePage specific styles

const HomePage = () => {
  const names = ["PRODUCTION", "PERSONAL", "PROFESSIONAL"];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isMouseOverH1, setIsMouseOverH1] = useState(false); // New state to track mouse over
  const h1Ref = useRef(null); // Ref for the h1 element

  useEffect(() => {
    let interval;
    if (!isMouseOverH1) { // Only run interval if mouse is not over h1
      interval = setInterval(() => {
        setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
      }, 3000); // Change name every 3 seconds
    }
    return () => clearInterval(interval);
  }, [names.length, isMouseOverH1]); // Add isMouseOverH1 to dependencies

  const handleMouseMove = (event) => {
    if (!h1Ref.current) return;

    setIsMouseOverH1(true); // Set mouse over state

    const { left, width } = h1Ref.current.getBoundingClientRect();
    const mouseX = event.clientX - left; // Mouse position relative to h1
    const segmentWidth = width / names.length;

    let newIndex = Math.floor(mouseX / segmentWidth);
    // Ensure index is within bounds
    newIndex = Math.max(0, Math.min(names.length - 1, newIndex));

    setCurrentNameIndex(newIndex);
  };

  const handleMouseLeave = () => {
    setIsMouseOverH1(false); // Resume interval
  };

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
          ref={h1Ref} // Attach ref
          onMouseMove={handleMouseMove} // Add mouse move handler
          onMouseLeave={handleMouseLeave} // Add mouse leave handler
        >
          MY <span className="dynamic-name">{names[currentNameIndex]}</span> PORTFOLIO
        </h1>
        <p>The premier platform for Audio-Visual Professionals to display, manage, and share their media work with stunning ease.</p>
        <div className="cta-buttons">
          <Link to="/login" className="cta-button">Login</Link>
          <Link to="/signup" className="cta-button secondary">Sign Up</Link>
        </div>
      </header>

      <section className="template-showcase">
        <h2>Beautiful Templates for Your Work</h2>
        <div className="template-grid">
          {Object.keys(templateFlavors).map((templateType, typeIndex) => (
            templateFlavors[templateType].map((flavor, flavorIndex) => (
              <TemplateCard
                key={flavor.id}
                title={`${flavor.name} ${templateType.charAt(0).toUpperCase() + templateType.slice(1)}`}
                description={flavor.description}
                imageUrl={flavor.config.thumbnail || `https://via.placeholder.com/300x200?text=${flavor.name}`}
                delay={(typeIndex * templateFlavors[templateType].length + flavorIndex) * 0.1}
                templateType={templateType}
                flavorId={flavor.id}
              />
            ))
          ))}
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