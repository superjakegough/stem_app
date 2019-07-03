import { Schema, Model, model } from "mongoose";
import { IDataItem } from "@/interfaces/data_item";

export const DataSchema: Schema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

export const DataItem: Model<IDataItem> = model<IDataItem>("Data", DataSchema);
// module.exports = mongoose.model("Data", DataSchema);
