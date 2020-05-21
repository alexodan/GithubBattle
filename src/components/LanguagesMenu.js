import React, { useContext } from "react";
import "./LanguagesMenu.css";
import ThemeContext from "./ThemeContext";

const LanguagesMenu = ({ languages, selected, changeLanguage }) => {
  const { theme } = useContext(ThemeContext);

  const selectLanguage = (language) => {
    changeLanguage(language);
  };

  return (
    <ul className="Languages">
      {languages.map((lang, idx) => (
        <li key={idx} className="Languages-option">
          <button
            className={`Languages-option__btn ${theme} ${
              lang === selected ? "active" : ""
            }`}
            onClick={() => selectLanguage(lang)}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LanguagesMenu;
