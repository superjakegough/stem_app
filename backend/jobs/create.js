import uuid from "uuid";
import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "StemJobs",
    Item: {
      jobId: uuid.v1(),
      title: data.title,
      salary: data.salary,
      benefits: data.benefits,
      jobType: data.jobType,
      jobLocation: data.jobLocation,
      jobReference: data.jobReference,
      description: data.description,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false, error: e });
  }
}
