import React from "react";
import "./LanguagesMenu.css";

const LanguagesMenu = ({ languages, changeLanguage }) => {
  // const theme = useContext(ThemeContext);
  const selectLanguage = (language) => {
    changeLanguage(language);
  };

  return (
    <ul className="Languages">
      {languages.map((lang, idx) => (
        <li key={idx} className="Languages-option">
          <button
            className="Languages-option__btn"
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
