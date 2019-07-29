import App from "./app";
import JobController from "./controllers/job_controller";
import BlogController from "./controllers/blog_controller";

const app = new App([
  new JobController(),
  new BlogController()
]);

app.listen();
