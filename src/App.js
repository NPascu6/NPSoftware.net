import React from "react";
import { Router } from "react-router-dom";
import history from "./Services/history";
import Routes from "./Navigation/router";
import store from "./Store/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

const App = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </CookiesProvider>
  );
};

export default App;
