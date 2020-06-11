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
  const [playerOneInfo, setPlayerOneInfo] = useState(null);
  const [playerTwoInfo, setPlayerTwoInfo] = useState(null);
  const ThemedButton = Button(theme);

  const submitPlayer = (playerId, player) => {
    if (player === "") return;
    if (playerId === "playerOne") {
      setPlayerOneInfo({
        avatar: `https://github.com/${player}.png?size=200`,
        username: player,
      });
    } else {
      setPlayerTwoInfo({
        avatar: `https://github.com/${player}.png?size=200`,
        username: player,
      });
    }
  };

  const battle = () => {};

  return (
    <div className={`Battle ${theme}`}>
      <div className="Battle-instructions">
        <Instructions />
        <h2 className="Battle-instructions__title">Players</h2>
        <div className="Battle-players">
          <div className="player">
            <p className="player-number">Player One</p>
            {playerOneInfo === null ? (
              <PlayerInput
                onSubmit={(label, player) => submitPlayer(label, player)}
                label="playerOne"
              />
            ) : (
              <PlayerPreview {...playerOneInfo} />
            )}
          </div>
          <div className="player">
            <p className="player-number">Player Two</p>
            {playerTwoInfo === null ? (
              <PlayerInput
                onSubmit={(label, player) => submitPlayer(label, player)}
                label="playerTwo"
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
