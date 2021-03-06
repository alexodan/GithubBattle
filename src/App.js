import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import ThemeContext from "./components/ThemeContext";
import Popular from "./components/Popular";
import Battle from "./components/Battle";

import "./App.css";
import Results from "./components/Results";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
      <Router>
        <ThemeContext.Provider value={value}>
          <div className={`App ${theme}`}>
            <div className="container">
              <NavBar />
              <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route exact path="/battle/results" component={Results} />
              </Switch>
            </div>
          </div>
        </ThemeContext.Provider>
      </Router>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);
