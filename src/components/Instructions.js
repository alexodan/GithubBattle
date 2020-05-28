import React, { useContext } from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import "./Instructions.css";
import ThemeContext from "./ThemeContext";

const Instructions = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Instructions ${theme}`}>
      <h2>Instructions</h2>
      <div className="Battle-instructions-cards">
        <div className="instruction-card">
          <h3 className="instruction-card-title">Enter two Github users</h3>
          <FaUserFriends
            size={140}
            color="rgb(240, 110, 90)"
            className={`instruction-card-icon ${theme}`}
          />
        </div>
        <div className="instruction-card">
          <h3 className="instruction-card-title">Battle</h3>
          <FaFighterJet
            size={140}
            color="rgb(110, 110, 110)"
            className={`instruction-card-icon ${theme}`}
          />
        </div>
        <div className="instruction-card">
          <h3 className="instruction-card-title">Enter two Github users</h3>
          <FaTrophy
            size={140}
            color="rgb(230, 220, 10)"
            className={`instruction-card-icon ${theme}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
