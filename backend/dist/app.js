import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
export class App {
    constructor(port, controllers) {
        this.app = express();
        this.port = port;
        this.initialiseMiddlewares();
        this.initialiseMongo();
        this.initialiseControllers(controllers);
    }
    initialiseMiddlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(logger('dev'));
    }
    initialiseMongo() {
        const dbRoute = 'mongodb+srv://superjake:nuONgT7N6on4h1Wg@cluster0-mdwa9.mongodb.net/test?retryWrites=true&w=majority';
        mongoose.connect(dbRoute, { useNewUrlParser: true });
        let db = mongoose.connection;
        db.once('open', () => console.log('connected to the database'));
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
    initialiseControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
//# sourceMappingURL=app.js.map