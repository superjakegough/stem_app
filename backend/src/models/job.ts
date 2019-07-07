import { Schema, Model, model } from "mongoose";
import { IJob } from "../interfaces/ijob";

const JobSchema: Schema = new Schema(
  {
    title: String,
    salary: String,
    benefits: String,
    jobType: String,
    location: String,
    reference: String,
    description: String
  },
  { timestamps: true }
);

export const Job: Model<IJob> = model<IJob>("Data", JobSchema);
