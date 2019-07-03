import { Schema, Model, model } from "mongoose";
import { IDataItem } from "../interfaces/idata_item";

const DataSchema: Schema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

export const DataItem: Model<IDataItem> = model<IDataItem>("Data", DataSchema);
