import React, { useState, useEffect } from "react";

import GitCard from "./GitCard";
import LanguagesMenu from "./LanguagesMenu";

import { LANGUAGES } from "../utils";
import { getPopularRepos } from "../github-api";

const Popular = () => {
  const [currentLanguage, setCurrentLanguage] = useState("All");
  const [repos, setRepos] = useState([]);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  useEffect(() => {
    getPopularRepos(currentLanguage)
      .then((resp) => resp.json())
      .then((data) => {
        setRepos(data.items);
      })
      .catch();
    return () => {};
  }, [currentLanguage]);

  return (
    <div className="Popular">
      <LanguagesMenu
        languages={LANGUAGES}
        selected={currentLanguage}
        changeLanguage={changeLanguage}
      />
      <div className="App-repos">
        {repos.length === 0 ? (
          <p>Loading...</p>
        ) : (
          repos.map((repo, idx) => (
            <GitCard
              key={repo.id}
              number={idx + 1}
              imgLogo={repo.owner.avatar_url}
              name={repo.owner.login}
              stars={repo.stargazers_count}
              forks={repo.forks}
              openIssues={repo.open_issues_count}
              htmlUrl={repo.html_url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Popular;
