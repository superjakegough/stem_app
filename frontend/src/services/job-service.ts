import axios from "axios";
import Job from "../models/job";

const backendUrl: string = "http://localhost:3001";
const apiRoute: string = "jobs";

export let jobs: Job[] = [];

export const getAllData = async () => {
  const res = await axios.get(`${backendUrl}/${apiRoute}/getAll`);
  jobs = res.data.job;
};

export const createData = async (job: Job) => {
  const res = await axios.post(`${backendUrl}/${apiRoute}/create`, {
    title: job.title,
    salary: job.salary,
    benefits: job.benefits,
    jobType: job.jobType,
    location: job.location,
    reference: job.reference,
    description: job.description
  });
  console.log(res.data);
};

export const updateData = async (job: Job) => {
  const res = await axios.put(`${backendUrl}/${apiRoute}/update/${job._id}`, {
    title: job.title,
    salary: job.salary,
    benefits: job.benefits,
    jobType: job.jobType,
    location: job.location,
    reference: job.reference,
    description: job.description
  });
  console.log(res.data);
};

export const deleteData = async (id: string) => {
  const res = await axios.delete(`${backendUrl}/${apiRoute}/delete/${id}`);
  console.log(res.data);
};
