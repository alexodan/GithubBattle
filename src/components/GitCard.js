import React, { useContext } from "react";
import {
  FaUser,
  FaStar,
  FaExclamationTriangle,
  FaCodeBranch,
} from "react-icons/fa";
import "./GitCard.css";
import ThemeContext from "./ThemeContext";

const GitCard = ({ number, imgLogo, name, stars, forks, openIssues }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`GitCard ${theme}`}>
      <h2 className="GitCard-number">#{number}</h2>
      <img className="GitCard-avatar" alt={name} src={imgLogo} />
      <div className="GitCard-item-title">
        <span>{name}</span>
      </div>
      <div className="GitCard-info">
        <div className="GitCard-info-item">
          <FaUser color="rgb(255, 190, 110)" size={20} />
          <span>{name}</span>
        </div>
        <div className="GitCard-info-item">
          <FaStar color="rgb(255, 220, 40)" size={20} />
          <span>{stars} stars</span>
        </div>
        <div className="GitCard-info-item">
          <FaCodeBranch color="rgb(210, 40, 240)" size={20} />
          <span>{forks} forks</span>
        </div>
        <div className="GitCard-info-item">
          <FaExclamationTriangle color="rgb(240, 100, 90)" size={20} />
          <span>{openIssues} openIssues</span>
        </div>
      </div>
    </div>
  );
};

export default GitCard;
