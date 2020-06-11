import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import Instructions from "./Instructions";
import PlayerPreview from "./PlayerPreview";

import "./Battle.css";
import PlayerInput from "./PlayerInput";
import styled from "@emotion/styled";

const Button = (theme) => {
  const background = theme === "dark" ? "#fff" : "#000";
  const color = theme === "dark" ? "#000" : "#fff";
  return styled.button`
    background-color: ${background};
    color: ${color};
    border: none;
    border-radius: 5px;
    width: 210px;
    height: 42px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  `;
};

const Battle = () => {
  const { theme } = useContext(ThemeContext);
  const [playerOne, setPlayerOne] = useState("");
  const [playerOneInfo, setPlayerOneInfo] = useState(null);
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerTwoInfo, setPlayerTwoInfo] = useState(null);
  const ThemedButton = Button(theme);

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

  const battle = () => {};

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
        <div className="btn-container">
          {playerOneInfo && playerTwoInfo && (
            <ThemedButton onClick={battle}>Battle</ThemedButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Battle;
