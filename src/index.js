import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "data/store";
import "./i18n/i18n";
import "./index.css.js";
import App from "./App";

const store = configureStore();
//komentarz
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
