import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import Controller from "./interfaces/controller";

export default class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Controller[]) {
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
    this.app.use(compression());
    this.app.use(helmet());
  }

  private initialiseMongo() {
    const dbRoute = "mongodb+srv://superjake:nuONgT7N6on4h1Wg@cluster0-mdwa9.mongodb.net/test?retryWrites=true&w=majority";
    mongoose.connect(dbRoute, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.once("open", () => console.log("connected to the database"));
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }

  private initialiseControllers(controllers: Controller[]) {
    controllers.forEach((controller: Controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
