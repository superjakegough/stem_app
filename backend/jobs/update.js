import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "StemJobs",
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      jobId: event.pathParameters.id
    },
    UpdateExpression:
      "SET title = :title, salary = :salary, benefits = :benefits, " +
      "jobType = :jobType, location = :location, reference = :reference, description = :description",
    ExpressionAttributeValues: {
      ":title": data.title || null,
      ":salary": data.salary || null,
      ":jobType": data.jobType || null,
      ":location": data.location || null,
      ":reference": data.reference || null,
      ":description": data.description || null
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
