import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Jobs from "./Pages/Jobs";
import Job from "./Pages/Job";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
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
          <Route path="/jobs" exact component={Jobs}></Route>
          <Route path="/job/:id" exact component={Job}></Route>
          <Route path="/blogs" exact component={Blogs}></Route>
          <Route path="/blog/:id" exact component={Blog}></Route>
          <Route path="/privacy" exact component={Privacy}></Route>
          <Route path="/adminjobs" exact component={AdminJobs}></Route>
          <Route path="/adminblogs" exact component={AdminBlogs}></Route>
        </Switch>
      </Navigation>
    </Router>
  );
}
