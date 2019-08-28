import Job from "../models/job";
import API from "@aws-amplify/api";

const apiName: string = "jobs";
const apiPath: string = "/jobs";

export const GetAllJobs = async () => {
  return API.get(apiName, apiPath, {});
};

export const GetJob = async (id: string) => {
  return API.get(apiName, `${apiPath}/${id}`, {});
};

export const CreateJob = async (job: Job) => {
  return API.post(apiName, apiPath, {
    body: job
  });
};

export const UpdateJob = async (job: Job) => {
  return API.put(apiName, `${apiPath}/${job.jobId}`, {
    body: job
  });
};

export const DeleteJob = async (id: string) => {
  return API.del(apiName, `${apiPath}/${id}`, {});
};