import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import GitCard from "./components/GitCard";
import LanguagesMenu from "./components/LanguagesMenu";
import ThemeContext from "./components/ThemeContext";

import { getPopularRepos } from "./github-api";
import { LANGUAGES } from "./utils";

import "./App.css";

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState("all");
  const [repos, setRepos] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    getPopularRepos(currentLanguage)
      .then((resp) => resp.json())
      .then((data) => {
        setRepos(data.items);
      })
      .catch();
    return () => {};
  }, [currentLanguage]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const value = React.useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <React.StrictMode>
      <div className="App">
        <ThemeContext.Provider value={value}>
          <LanguagesMenu
            languages={LANGUAGES}
            changeLanguage={changeLanguage}
          />
          <div className="App-repos">
            {repos.map((repo, idx) => (
              <GitCard
                key={repo.id}
                number={idx + 1}
                imgLogo={repo.owner.avatar_url}
                name={repo.owner.login}
                stars={repo.stargazers_count}
                forks={repo.forks}
                openIssues={repo.open_issues_count}
              />
            ))}
          </div>
          <pre>{JSON.stringify(repos, null, 2)}</pre>
        </ThemeContext.Provider>
      </div>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);
