import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import Instructions from "./Instructions";
import PlayerPreview from "./PlayerPreview";

import "./Battle.css";
import PlayerInput from "./PlayerInput";

const Battle = () => {
  const { theme } = useContext(ThemeContext);
  const [playerOne, setPlayerOne] = useState("");
  const [playerOneInfo, setPlayerOneInfo] = useState(null);
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerTwoInfo, setPlayerTwoInfo] = useState(null);

  const submitPlayer = (playerId, player) => {
    playerId === "playerOne"
      ? setPlayerOneInfo({
          avatar: `https://github.com/${player}.png?size=200`,
          username: player,
        })
      : setPlayerTwoInfo({
          avatar: `https://github.com/${player}.png?size=200`,
          username: player,
        });
  };

  const handleChange = (id, value) =>
    id === "playerOne" ? setPlayerOne(value) : setPlayerTwo(value);

  return (
    <div className={`Battle ${theme}`}>
      <div className="Battle-instructions">
        <Instructions />
        <h2>Players</h2>
        <div className="Battle-players">
          <div className="player">
            <p>Player One</p>
            {playerOneInfo === null ? (
              <PlayerInput
                onSubmit={() => submitPlayer("playerOne", playerOne)}
                handleChange={(e) => handleChange("playerOne", e.target.value)}
              />
            ) : (
              <PlayerPreview {...playerOneInfo} />
            )}
          </div>
          <div className="player">
            <p>Player Two</p>
            {playerTwoInfo === null ? (
              <PlayerInput
                onSubmit={() => submitPlayer("playerTwo", playerTwo)}
                handleChange={(e) => handleChange("playerTwo", e.target.value)}
              />
            ) : (
              <PlayerPreview {...playerTwoInfo} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battle;
