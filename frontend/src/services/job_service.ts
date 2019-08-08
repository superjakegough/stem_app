import axios from "axios";
import Job from "../models/job";

const backendUrl: string = "http://localhost:3001";
const apiRoute: string = "jobs";

export const getAllJobs = async () => {
  const res = await axios.get(`${backendUrl}/${apiRoute}/getAll`);
  return res.data.job;
};

export const createJob = async (job: Job) => {
  const res = await axios.post(`${backendUrl}/${apiRoute}/create`, {
    title: job.title,
    salary: job.salary,
    benefits: job.benefits,
    jobType: job.jobType,
    location: job.location,
    reference: job.reference,
    description: job.description
  });
  return res.data;
};

export const updateJob = async (job: Job) => {
  const res = await axios.put(`${backendUrl}/${apiRoute}/update/${job.jobId}`, {
    title: job.title,
    salary: job.salary,
    benefits: job.benefits,
    jobType: job.jobType,
    location: job.location,
    reference: job.reference,
    description: job.description
  });
  return res.data;
};

export const deleteJob = async (id: string) => {
  const res = await axios.delete(`${backendUrl}/${apiRoute}/delete/${id}`);
  return res.data;
};
