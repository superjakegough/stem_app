import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "StemJobs",
    Key: {
      jobId: event.pathParameters.id
    },
    UpdateExpression:
      "SET title = :title, salary = :salary, benefits = :benefits, jobType = :jobType, " +
      "jobLocation = :jobLocation, jobReference = :jobReference, description = :description, jobFilled = :jobFilled",
    ExpressionAttributeValues: {
      ":title": data.title || null,
      ":salary": data.salary || null,
      ":benefits": data.benefits || null,
      ":jobType": data.jobType || null,
      ":jobLocation": data.jobLocation || null,
      ":jobReference": data.jobReference || null,
      ":description": data.description || null,
      ":jobFilled": data.jobFilled || null
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false, error: e });
  }
}
