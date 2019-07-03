import express from "express";
import Controller from "../interfaces/controller";
import { DataItem } from "../models/data_item";
import { IDataItem } from "../interfaces/data_item";

export default class DataController implements Controller {
  public path: string = "/data";
  public router: express.Router = express.Router();

  constructor() {
    this.initialiseRoutes();
  }

  public initialiseRoutes() {
    this.router.get(`${this.path}/getAllData`, this.getAllData);
    this.router.post(`${this.path}/createData`, this.createData);
    this.router.put(`${this.path}/updateData`, this.updateData);
    this.router.delete(`${this.path}/deleteData`, this.deleteData);
  }

  getAllData = (req: express.Request, res: express.Response) => {
    DataItem.find((err: any, data: IDataItem) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  };

  createData = (req: express.Request, res: express.Response) => {
    const data = new DataItem();

    const { id, message } = req.body;

    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: "INVALID INPUTS",
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
    DataItem.findByIdAndUpdate(id, update, (err: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  deleteData = (req: express.Request, res: express.Response) => {
    const { id } = req.body;
    DataItem.findByIdAndRemove(id, (err: any) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  };
}
