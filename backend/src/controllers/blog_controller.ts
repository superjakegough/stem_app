import express from "express";
import IController from "../interfaces/icontroller";
import { Blog } from "../models/blog";
import { IBlog } from "../interfaces/iblog";

export default class DataController implements IController {
  public path: string = "/blogs";
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
    Blog.find((err: any, blog: IBlog) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, blog: blog });
    });
  };

  create = (req: express.Request, res: express.Response) => {
    const blog = new Blog(req.body);
    blog.save((err: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  update = (req: express.Request, res: express.Response) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, (err: any) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  delete = (req: express.Request, res: express.Response) => {
    Blog.findByIdAndRemove(req.params.id, (err: any) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  };
}
