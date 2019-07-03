import App from "./app";
import DataController from "./controllers/datacontroller";

const APIPORT: number = 3001;

const app = new App(
  APIPORT,
  [new DataController()],
);

app.listen();