import { useContext, useState } from "react";
import styled from "@emotion/styled";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// I feel really uncomfortable with this though. I'd rather just use BEM.
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ThemeContext from "./ThemeContext";

const Form = styled.form`
  input {
    width: 63%;
    margin-right: 2%;
    height: 35px;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    padding-left: 5px;
  }
  button {
    width: 35%;
    text-transform: uppercase;
    height: 35px;
    letter-spacing: 2px;
    font-size: 18px;
    border: none;
    color: rgb(180, 180, 180);
  }
`;

const PlayerInput = ({ onSubmit, label }) => {
  const { theme } = useContext(ThemeContext);
  const [player, setPlayer] = useState("");
  const inputBackground =
    theme === "light" ? "rgb(245, 245, 245)" : "rgb(50, 50, 50)";
  const buttonBackground =
    theme === "light" ? "rgb(230, 230, 230)" : "rgb(90, 90, 90)";

  const handleChange = (e) => setPlayer(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(label, player);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        placeholder="github username"
        type="text"
        onChange={handleChange}
        value={player}
        css={css`
          background-color: ${inputBackground};
        `}
      />
      <button
        type="submit"
        css={css`
          background-color: ${buttonBackground};
        `}
      >
        Submit
      </button>
    </Form>
  );
};

export default PlayerInput;
