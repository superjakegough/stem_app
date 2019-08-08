import Job from "../models/job";
import { API } from "aws-amplify";

const apiName: string = "jobs";
const apiPath: string = "/jobs";

export const getAllJobs = async () => {
  return API.get(apiName, apiPath, {});
};

export const createJob = async (job: Job) => {
  return API.post(apiName, apiPath, {
    body: job
  });
};

export const updateJob = async (job: Job) => {
  API.put(apiName, `${apiPath}/${job.jobId}`, {
    body: job
  });
};

export const deleteJob = async (id: string) => {
  API.del(apiName, `${apiPath}/${id}`, {});
};
