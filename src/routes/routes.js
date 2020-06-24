import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
