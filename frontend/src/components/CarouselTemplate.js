import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import sampleMedia from '../data/sampleMedia';
import templateFlavors from '../data/templateFlavors';
import MediaEmbed from './MediaEmbed';
import './CarouselTemplate.css';

  const CarouselTemplate = () => {
    const { flavorId } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flavor = templateFlavors.carousel.find(f => f.id === flavorId);

    if (!flavor) {
      return <div className="carousel-template-page"><h1>Template Not Found</h1><p>The specified carousel template flavor does not exist.</p></div>;
    }

    const variants = {
      enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }),
    };

    const paginate = (newDirection) => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + newDirection + sampleMedia.length) % sampleMedia.length;
        return nextIndex;
      });
    };

    return (
      <div className="carousel-template-page">
        <h1>{flavor.name} Carousel Portfolio</h1>
        <p>{flavor.description}</p>
        <div className="carousel-wrapper" style={{
          boxShadow: flavor.config.itemShadow,
          backgroundColor: flavor.config.itemBg,
        }}>
          <div className="carousel-container">
            <AnimatePresence initial={false} custom={1}>
              <motion.div
                key={currentIndex}
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="carousel-item"
              >
                <MediaEmbed media={sampleMedia[currentIndex]} />
                <div className="item-details">
                  <h3>{sampleMedia[currentIndex].title}</h3>
                  <p>{sampleMedia[currentIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <button onClick={() => paginate(1)} className="carousel-button next" style={{ backgroundColor: flavor.config.navColor }}>&#10095;</button>
            <button onClick={() => paginate(-1)} className="carousel-button prev" style={{ backgroundColor: flavor.config.navColor }}>&#10094;</button>
          </div>
          <div className="carousel-dots">
            {sampleMedia.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                style={{ backgroundColor: currentIndex === index ? flavor.config.activeDotColor : flavor.config.dotColor }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default CarouselTemplate;