import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/home.vue";
import Services from "@/components/services/services.vue";
import Jobs from "@/components/jobs/jobs.vue";
import Job from "@/components/job/job.vue";
import Blogs from "@/components/blogs/blogs.vue";
import Blog from "@/components/blog/blog.vue";
import AdminJobs from "@/components/adminjobs/adminjobs";
import AdminBlogs from "@/components/adminblogs/adminblogs";
import Privacy from "@/components/privacy/privacy";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs
    },
    {
      path: "/job/:id",
      name: "job",
      component: Job
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: Blog
    },
    {
      path: "/adminjobs",
      name: "adminjobs",
      component: AdminJobs
    },
    {
      path: "/adminblogs",
      name: "adminblogs",
      component: AdminBlogs
    },
    {
      path: "/privacy",
      name: "privacy",
      component: Privacy
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 300);
    });
  }
});
