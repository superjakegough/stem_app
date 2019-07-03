import App from "./app";
import DataController from "./controllers/datacontroller";

const app = new App(
  [
    new DataController()
  ]
);

app.listen();