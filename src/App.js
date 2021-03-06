import React, { Fragment } from "react";
import {
  Navigation,
  Wrapper,
  LoadingIndicator,
  Button,
  HomePage,
} from "components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import theme from "utils/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            {
              content: t("Homepage"),
              to: "/",
            },
            {
              content: t("Budget"),
              to: "/budget",
            },
          ]}
          RightElement={
            <div>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("pl")}
              >
                pl
              </Button>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("en")}
              >
                en
              </Button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/budget">Budget</Route>
          </Switch>
        </Wrapper>
      </Router>
    </Fragment>
  );
}
const RootApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  );
};

export default RootApp;
