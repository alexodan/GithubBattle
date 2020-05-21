import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

import "./NavBar.css";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(156, 46, 46)",
};

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`NavBar ${theme}`}>
      <ul className="row">
        <li>
          <NavLink to="/" activeStyle={activeStyle} className="link">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink to="/battle" activeStyle={activeStyle} className="link">
            Battle
          </NavLink>
        </li>
      </ul>
      <button className={`NavBar-btn ${theme}`} onClick={toggleTheme}>
        <span role="img" aria-label="lightbulb">
          {theme === "light" ? "🔦" : "💡"}
        </span>
      </button>
    </div>
  );
};

export default NavBar;
