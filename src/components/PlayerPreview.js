import React, { useContext } from "react";
import { FaTimesCircle, FaFileExcel } from "react-icons/fa";
import styled from "@emotion/styled";
import ThemeContext from "./ThemeContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 24px;
  border-radius: 4px;
  color: rgb(156, 46, 46);
  font-weight: bold;
  &:hover {
    color: rgb(186, 46, 46);
  }
`;

const Image = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 5px;
`;

const PlayerPreview = ({ avatar, username }) => {
  const { theme } = useContext(ThemeContext);
  const backgroundColor =
    theme === "light" ? "rgb(218, 218, 218)" : "rgb(36, 40, 42)";

  return (
    <Container style={{ backgroundColor: backgroundColor }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image alt={username} src={avatar} />
        <span>{username}</span>
      </div>
      <FaTimesCircle size={22} />
    </Container>
  );
};

export default PlayerPreview;
