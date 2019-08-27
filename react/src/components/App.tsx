import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from "./Navigation";
import Home from "./Home";
import "./App.css";


const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Navigation>
        <Switch>
          <Route path="/" exact component={Home}>
          </Route>
        </Switch>
        <Switch>
          <Route path="/services" exact component={Home}>
          </Route>
        </Switch>
        <Switch>
          <Route path="/jobs" exact component={Home}>
          </Route>
        </Switch>
        <Switch>
          <Route path="/blogs" exact component={Home}>
          </Route>
        </Switch>
      </Navigation>
    </Router>
  );
}
