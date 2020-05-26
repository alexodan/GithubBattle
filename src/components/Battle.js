import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import Instructions from "./Instructions";
import { FaTimesCircle, FaFileExcel } from "react-icons/fa";
import { fetchPlayer } from "../github-api";

import "./Battle.css";

const Battle = () => {
  const { theme } = useContext(ThemeContext);
  const [playerOne, setPlayerOne] = useState("");
  const [playerOneInfo, setPlayerOneInfo] = useState(null);
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerTwoInfo, setPlayerTwoInfo] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "playerOne") {
      setPlayerOne(e.target.value);
    } else if (e.target.name === "playerTwo") {
      setPlayerTwo(e.target.value);
    }
  };

  const submitPlayerOne = () => {
    setPlayerOneInfo({
      avatar: `https://github.com/${playerOne}.png?size=200`,
      username: playerOne,
    });
  };

  const submitPlayerTwo = () => {
    setPlayerTwoInfo({
      avatar: `https://github.com/${playerTwo}.png?size=200`,
      username: playerTwo,
    });
  };

  return (
    <div className={`Battle ${theme}`}>
      <div className="Battle-instructions">
        <Instructions />
        <h2>Players</h2>
        <div className="Battle-players">
          <div className="Battle-players-one">
            <p>Player One</p>
            {playerOneInfo === null ? (
              <div className="player-input">
                <input type="text" onChange={handleChange} name="playerOne" />
                <button onSubmit={submitPlayerOne}>Submit</button>
              </div>
            ) : (
              <span>Player One info</span>
            )}
          </div>
          <div className="Battle-players-two">
            <p>Player Two</p>
            {playerTwoInfo === null ? (
              <div className="player-input">
                <input type="text" onChange={handleChange} name="playerTwo" />
                <button onSubmit={submitPlayerTwo}>Submit</button>
              </div>
            ) : (
              <span>Player Two info</span>
            )}
          </div>
        </div>
        <FaTimesCircle size={120} />
        <FaFileExcel size={120} />
      </div>
    </div>
  );
};

export default Battle;
