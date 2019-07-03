import express from 'express';
import { DataItem } from '../schemas/data_schema';
export default class DataController {
    constructor() {
        this.path = '/data';
        this.router = express.Router();
        this.getAllData = (req, res) => {
            DataItem.find((err, data) => {
                if (err)
                    return res.json({ success: false, error: err });
                return res.json({ success: true, data: data });
            });
        };
        this.createData = (req, res) => {
            let data = new DataItem();
            const { id, message } = req.body;
            if ((!id && id !== 0) || !message) {
                return res.json({
                    success: false,
                    error: 'INVALID INPUTS',
                });
            }
            data.message = message;
            data.id = id;
            data.save((err) => {
                if (err)
                    return res.json({ success: false, error: err });
                return res.json({ success: true });
            });
        };
        this.updateData = (req, res) => {
            const { id, update } = req.body;
            DataItem.findByIdAndUpdate(id, update, (err) => {
                if (err)
                    return res.json({ success: false, error: err });
                return res.json({ success: true });
            });
        };
        this.deleteData = (req, res) => {
            const { id } = req.body;
            DataItem.findByIdAndRemove(id, (err) => {
                if (err)
                    return res.send(err);
                return res.json({ success: true });
            });
        };
        this.initialiseRoutes();
    }
    initialiseRoutes() {
        this.router.get(this.path, this.getAllData);
        this.router.post(this.path, this.createData);
        this.router.put(this.path, this.updateData);
        this.router.delete(this.path, this.deleteData);
    }
}
//# sourceMappingURL=datacontroller.js.map