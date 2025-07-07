import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import templateFlavors from '../data/templateFlavors'; // Import templateFlavors
import './TemplateCard.css';

const TemplateCard = ({ title, description, imageUrl, delay, templateType, flavorId }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    const path = `/template/${templateType}/${flavorId}`;
    navigate(path);
  };

  return (
    <motion.div
      className="template-preview"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.05, rotate: 2 }} // Expand and rotate on hover
      onClick={handleClick} // Use the new handleClick
    >
      <h3>{title}</h3>
      <img src={imageUrl} alt={`${title} Preview`} />
      <p>{description}</p>
    </motion.div>
  );
};

export default TemplateCard;