import React, { useContext } from "react";
// FaExclamationTriangle
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
      <div className="GitCard-item">
        <span>{stars} stars</span>
      </div>
      <div className="GitCard-item">
        <span>{forks} forks</span>
      </div>
      <div className="GitCard-item">
        <span>{openIssues} openIssues</span>
      </div>
    </div>
  );
};

export default GitCard;
