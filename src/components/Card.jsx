import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "../assets/styles/css/card.css";

const Card = ({ projectName, projectDescription, imageSrc, link }) => {
  return (
    <div className="card">
      <div className="image-placeholder">
        <img src={imageSrc} alt={projectName} />
      </div>
      <div className="info">
        <h2 className="project-name">{projectName}</h2>
        <p className="project-description">{projectDescription}</p>
        <FontAwesomeIcon 
          icon={faArrowRight} 
          className="navigate-arrow"
          onClick={() => window.open(link, "_blank")} 
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
