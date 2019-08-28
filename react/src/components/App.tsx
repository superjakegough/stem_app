import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from "./Navigation";
import Home from "./Home";
import Services from "./Services";
import Jobs from "./Jobs";
import Blogs from "./Blogs";
import "./App.css";

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Navigation>
        <Switch>
          <Route path="/" exact component={Home}>
          </Route>
          <Route path="/services" exact component={Services}>
          </Route>
          <Route path="/jobs" exact component={Jobs}>
          </Route>
          <Route path="/blogs" exact component={Blogs}>
          </Route>
        </Switch>
      </Navigation>
    </Router>
  );
}
