import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import history from "connect-history-api-fallback";
import IController from "./interfaces/icontroller";

export default class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: IController[]) {
    this.app = express();
    this.port = 3001;

    this.initialiseMiddlewares();
    this.initialiseMongo();
    this.initialiseControllers(controllers);
  }

  private initialiseMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(logger("dev"));
    this.app.use(helmet());
    this.app.use(history());
  }

  private initialiseMongo() {
    const src: string = "mongodb+srv";
    const name: string = "superjake";
    const sign: string = "nuONgT7N6on4h1Wg";
    const clust: string = "cluster0-mdwa9.mongodb.net/test";
    const dbRoute = `${src}://${name}:${sign}@${clust}?retryWrites=true&w=majority`;
    mongoose.connect(dbRoute, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.once("open", () => console.log("connected to the database"));
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }

  private initialiseControllers(controllers: IController[]) {
    controllers.forEach((controller: IController) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
