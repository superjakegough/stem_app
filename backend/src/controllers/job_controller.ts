import express from "express";
import IController from "../interfaces/icontroller";
import { Job } from "../models/job";
import { IJob } from "../interfaces/ijob";

export default class DataController implements IController {
  public path: string = "/jobs";
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
    Job.find((err: any, job: IJob) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, job: job });
    });
  };

  create = (req: express.Request, res: express.Response) => {
    const job = new Job(req.body);
    job.save((err: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  update = (req: express.Request, res: express.Response) => {
    Job.findByIdAndUpdate(req.params.id, req.body, (err: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  delete = (req: express.Request, res: express.Response) => {
    Job.findByIdAndRemove(req.params.id, (err: any) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  };
}
