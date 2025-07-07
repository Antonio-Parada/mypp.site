import React from 'react';
import { motion } from 'framer-motion';
import './TemplateCard.css';

const TemplateCard = ({ title, description, imageUrl, delay }) => {
  return (
    <motion.div
      className="template-preview"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.05, rotate: 2 }} // Expand and rotate on hover
      onClick={() => alert(`Loading ${title} template... (Placeholder)`)} // Click handler
    >
      <h3>{title}</h3>
      <img src={imageUrl} alt={`${title} Preview`} />
      <p>{description}</p>
    </motion.div>
  );
};

export default TemplateCard;