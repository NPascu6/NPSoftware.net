import React from "react";
import { Switch, Route } from "react-router-dom";
import SignInPage from "../Pages/signIn";
import SignUpPage from "../Pages/signUp";
import AccountPage from "../Pages/accountPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignUpPage} />
      <Route path="/signInPage" component={SignInPage} />
      <Route path="/account" component={AccountPage} />
      <Route component={SignUpPage} />
    </Switch>
  );
};

export default Routes;
