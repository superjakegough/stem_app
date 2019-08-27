import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import TopAppBar from "./TopAppBar";
import Home from "./Home";
import "./App.css";


const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <TopAppBar>
        <Switch>
          <Route path="/" exact component={Home}>
          </Route>
        </Switch>
      </TopAppBar>
    </Router>
  );
}
