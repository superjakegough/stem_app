import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import StemJobs from "./Pages/StemJobs";
import ViewJob from "./Pages/ViewJob";
import StemBlogs from "./Pages/StemBlogs";
import ViewBlog from "./Pages/ViewBlog";
import Privacy from "./Pages/Privacy";
import AdminJobs from "./Admin/AdminJobs";
import AdminBlogs from "./Admin/AdminBlogs";
import "./App.css";

const history = createBrowserHistory();

// Scroll to top on route change
history.listen(_ => {
  window.scrollTo(0, 0);
});

export default function App() {
  return (
    <Router history={history}>
      <Navigation>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/jobs" exact component={StemJobs}></Route>
          <Route path="/job/:id" exact component={ViewJob}></Route>
          <Route path="/blogs" exact component={StemBlogs}></Route>
          <Route path="/blog/:id" exact component={ViewBlog}></Route>
          <Route path="/privacy" exact component={Privacy}></Route>
          <Route path="/adminjobs" exact component={AdminJobs}></Route>
          <Route path="/adminblogs" exact component={AdminBlogs}></Route>
        </Switch>
      </Navigation>
    </Router>
  );
}
