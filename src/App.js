import React from "react";
import { Navigation } from "components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import theme from "utils/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            {
              content: "Homepage",
              to: "/",
            },
            {
              content: "Budget",
              to: "/budget",
            },
          ]}
        />
        <Switch>
          <Route exact path="/">
            Homepage
          </Route>
          <Route path="/budget">Budget</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
