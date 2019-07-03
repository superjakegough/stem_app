import express from 'express';
import * as Data from '../schemas/data';

export default class DataController {
  public path: string = '/data';
  public router = express.Router();

  constructor() {
    this.initialiseRoutes();
  }

  public initialiseRoutes() {
    this.router.get(this.path, this.getAllData);
    this.router.post(this.path, this.createData);
    this.router.put(this.path, this.updateData);
    this.router.delete(this.path, this.deleteData);
  }

  getAllData = (req: express.Request, res: express.Response) => {
    Data.find((err: any, data: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  };

  createData = (req: express.Request, res: express.Response) => {
    let data = new Data();

    const { id, message } = req.body;

    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    data.message = message;
    data.id = id;
    data.save((err: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  updateData = (req: express.Request, res: express.Response) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  deleteData = (req: express.Request, res: express.Response) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, (err) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  };
}
