import { Job } from "../models/job";
import API from "@aws-amplify/api";

const apiName: string = "jobs";
const apiPath: string = "/jobs";

export const GetAllJobs = async (): Promise<Job[]> => {
  const jobs: Job[] = await API.get(apiName, apiPath, {});
  jobs.sort((a: Job, b: Job) => {
    return parseInt(b.createdAt) - parseInt(a.createdAt);
  });
  return jobs;
};

export const GetJob = async (id: string): Promise<Job> => {
  return API.get(apiName, `${apiPath}/${id}`, {});
};

export const CreateJob = async (job: Job): Promise<any> => {
  return API.post(apiName, apiPath, {
    body: job
  });
};

export const UpdateJob = async (job: Job): Promise<any> => {
  return API.put(apiName, `${apiPath}/${job.jobId}`, {
    body: job
  });
};

export const DeleteJob = async (id: string): Promise<any> => {
  return API.del(apiName, `${apiPath}/${id}`, {});
};
