import { Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  salary: string;
  benefits: string;
  jobType: string;
  location: string;
  reference: string;
  description: string;
}