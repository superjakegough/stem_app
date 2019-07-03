import express from "express";
import IController from "../interfaces/icontroller";
import { DataItem } from "../models/data_item";
import { IDataItem } from "../interfaces/idata_item";

export default class DataController implements IController {
  public path: string = "/data";
  public router: express.Router = express.Router();

  constructor() {
    this.initialiseRoutes();
  }

  public initialiseRoutes() {
    this.router.get(`${this.path}/getAll`, this.getAll);
    this.router.post(`${this.path}/create`, this.create);
    this.router.put(`${this.path}/update/:id`, this.update);
    this.router.delete(`${this.path}/delete/:id`, this.delete);
  }

  getAll = (req: express.Request, res: express.Response) => {
    DataItem.find((err: any, data: IDataItem) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  };

  create = (req: express.Request, res: express.Response) => {
    const data = new DataItem();
    const { message } = req.body;
    data.message = message;
    data.save((err: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  update = (req: express.Request, res: express.Response) => {
    DataItem.findByIdAndUpdate(req.params.id, req.body, (err: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  delete = (req: express.Request, res: express.Response) => {
    DataItem.findByIdAndRemove(req.params.id, (err: any) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  };
}
