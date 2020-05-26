import React, { useState, useEffect, useContext } from "react";
import "./Loading.css";
import ThemeContext from "./ThemeContext";

const Loading = () => {
  const [dots, setDots] = useState(".");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const id = setTimeout(() => {
      dots.length > 2 ? setDots(".") : setDots(dots + ".");
    }, 300);
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div className={`Loading ${theme}`}>
      <p>{`Loading${dots}`}</p>
    </div>
  );
};

export default Loading;
