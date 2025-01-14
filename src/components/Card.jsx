import React from "react";
import "../assets/styles/css/card.css";
import { Button } from "react-bootstrap";

const Card = ({ projectName, projectDescription, imageSrc, link }) => {
  return (
    <div className="card">
      <div className="image-placeholder">
        <img src={imageSrc} alt={projectName} />
      </div>
      <div className="info">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-description">{projectDescription}</p>
        <Button variant="primary" onClick={() => window.open(link, "_blank")}>
          Navigate
        </Button>
      </div>
    </div>
  );
};

export default Card;
