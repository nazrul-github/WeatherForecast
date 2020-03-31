import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import * as createHistory from "history";
import Home from "../component/home";

export const history = createHistory.createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
