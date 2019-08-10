import Job from "../models/job";
import { API } from "aws-amplify";
import AWS from "aws-sdk";

const apiName: string = "jobs";
const apiPath: string = "/jobs";
const publicId: string = "AKIARKIUYBJ576W7VUVT";
const accessKey: string = "sJUCcA/00pSqUBa54L3AzlAyXAI7f08WVcagvq7p";
const S3 = new AWS.S3({
  region: "eu-west-1",
  accessKeyId: publicId,
  secretAccessKey: accessKey,
});
const encoder = new TextEncoder();

export const getAllJobs = async () => {
  return API.get(apiName, apiPath, {});
};

export const createJob = async (job: Job) => {
  return API.post(apiName, apiPath, {
    body: job
  });
};

export const updateJob = async (job: Job) => {
  return API.put(apiName, `${apiPath}/${job.jobId}`, {
    body: job
  });
};

export const deleteJob = async (id: string) => {
  return API.del(apiName, `${apiPath}/${id}`, {});
};

export const getS3Jobs = async () => {
  const listParams: any = {
    Bucket: "stem-jobs-export"
  };

  const objects: any = await S3.listObjectsV2(listParams).promise();
  const filtered = objects.Contents.filter((e: any) => {
    if (!e.Key.includes("SUCCESS") && !e.Key.includes("manifest")) {
      return e;
    }
  });
  filtered.sort((a: any, b: any) => {
    return b.LastModified - a.LastModified;
  });

  const getParams: any = {
    Bucket: "stem-jobs-export",
    Key: filtered[0].Key
  };

  const s3Jobs: any = await S3.getObject(getParams).promise();
  return JSON.parse(s3Jobs.Body.toString());
};
