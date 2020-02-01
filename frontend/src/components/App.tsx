import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import HelmetWrapper from "./Layout/HelmetWrapper";
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
import StemIndustry from "./Pages/StemIndustry";
import { Industry } from "../models/industry";
import { getIndustries } from "../helpers/industry-helper";
import "./App.css";

const history = createBrowserHistory();

// Scroll to top on route change
history.listen(_ => {
  window.scrollTo(0, 0);
});

export default function App() {
  const title: string = "Stem Skills & Recruitment";
  const industries: Industry[] = getIndustries();

  return (
    <HelmetWrapper title={title} description={`${title}`}>
      <Router history={history}>
        <Navigation>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title}`}
                    description={`What we do at ${title}`}
                  >
                    <Home />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/services"
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - Services`}
                    description={`What services we provide at ${title}`}
                  >
                    <Services />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/jobs"
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - Jobs`}
                    description={`Current opportunities provided by ${title}`}
                  >
                    <StemJobs />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/job/:id"
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - View Job`}
                    description={`${title} - View Job`}
                  >
                    <ViewJob />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/blogs"
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - Blogs`}
                    description={`News & Advice Blogs provided by ${title}`}
                  >
                    <StemBlogs />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/blog/:id"
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - View Blog`}
                    description={`${title} - View Blog`}
                  >
                    <ViewBlog />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/blog/:id"
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - View Blog`}
                    description={`${title} - View Blog`}
                  >
                    <ViewBlog />
                  </HelmetWrapper>
                );
              }}
            />
            {industries.map(industry => (
              <Route
                key={industry.path}
                path={industry.path}
                render={() => {
                  return (
                    <HelmetWrapper
                      title={`${title} - ${industry.title}`}
                      description={`${title} - ${industry.title}`}
                    >
                      <StemIndustry industry={industry} />
                    </HelmetWrapper>
                  );
                }}
              />
            ))}
            <Route path="/privacy" exact component={Privacy}></Route>
            <Route path="/adminjobs" exact component={AdminJobs}></Route>
            <Route path="/adminblogs" exact component={AdminBlogs}></Route>
          </Switch>
        </Navigation>
      </Router>
    </HelmetWrapper>
  );
}
