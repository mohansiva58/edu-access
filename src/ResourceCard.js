import React from 'react';
import './ResourceCard.css'; // Import the CSS file

const ResourceCard = ({ title, description, category, link, image }) => {
  return (
    <div className="resource-card">
      <img src={image} alt={title} className="resource-image" />
      <div className="resource-content">
        <h3 className="resource-title">{title}</h3>
        <p className="resource-description">{description}</p>
        <span className="resource-category">{category}</span>
        <a href={link} className="resource-link">Learn More</a>
      </div>
    </div>
  );
};

export default ResourceCard;