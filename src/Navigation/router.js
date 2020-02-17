import React from "react";
import { Switch, Route } from "react-router-dom";
import signInPage from "../Pages/signIn";
import signUpPage from "../Pages/signUp";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={signUpPage} />
      <Route path="/signInPage" component={signInPage} />
      <Route component={signUpPage} />
    </Switch>
  );
};

export default Routes
