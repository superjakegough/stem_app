import { App } from './app';
import DataController from './controllers/datacontroller';
const APIPORT = 3001;
const app = new App(APIPORT, [new DataController()]);
app.listen();
//# sourceMappingURL=server.js.map