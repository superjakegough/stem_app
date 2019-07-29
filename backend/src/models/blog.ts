import { Schema, Model, model } from "mongoose";
import { IBlog } from "../interfaces/iblog";

const BlogSchema: Schema = new Schema(
  {
    title: String,
    description: String,
    content: String
  },
  { timestamps: true }
);

export const Blog: Model<IBlog> = model<IBlog>("Data", BlogSchema);