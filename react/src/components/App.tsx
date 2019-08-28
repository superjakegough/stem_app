import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Jobs from "./Pages/Jobs";
import Blog from "./Pages/Blog";
import Blogs from "./Pages/Blogs";
import Privacy from "./Pages/Privacy";
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
          <Route path="/blog/:id" exact component={Blog}>
          </Route>
          <Route path="/blogs" exact component={Blogs}>
          </Route>
          <Route path="/privacy" exact component={Privacy}>
          </Route>
        </Switch>
      </Navigation>
    </Router>
  );
}
