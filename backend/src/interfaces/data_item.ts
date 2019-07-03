import { Document } from "mongoose";

export interface IDataItem extends Document {
  id: number;
  message: string;
}