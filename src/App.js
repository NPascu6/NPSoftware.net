import React from "react";
import { Router } from "react-router-dom";
import history from "./Services/history";
import Routes from "./Navigation/router";
import {store} from "./Store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
