import App from "./app";
import JobController from "./controllers/job_controller";

const app = new App([new JobController()]);

app.listen();
