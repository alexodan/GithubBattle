import React, { useState, useEffect } from "react";

import GitCard from "./GitCard";
import LanguagesMenu from "./LanguagesMenu";
import Loading from "./Loading";

import { LANGUAGES } from "../utils";
import { getPopularRepos } from "../github-api";

import "./Popular.css";

const Popular = () => {
  const [currentLanguage, setCurrentLanguage] = useState("All");
  const [allRepos, setAllRepos] = useState({});

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  useEffect(() => {
    if (!allRepos[currentLanguage] || allRepos[currentLanguage].length === 0) {
      getPopularRepos(currentLanguage)
        .then((resp) => resp.json())
        .then(({ items }) => {
          setAllRepos({
            ...allRepos,
            [currentLanguage]: items,
          });
        })
        .catch((err) => console.error(err));
    }
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
        {!allRepos[currentLanguage] ||
        allRepos[currentLanguage].length === 0 ? (
          <Loading />
        ) : (
          allRepos[currentLanguage].map((repo, idx) => (
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
