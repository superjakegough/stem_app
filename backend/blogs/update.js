import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "StemBlogs",
    Key: {
      blogId: event.pathParameters.id
    },
    UpdateExpression:
      "SET title = :title, description = :description, content = :content",
    ExpressionAttributeValues: {
      ":title": data.title || null,
      ":description": data.description || null,
      ":content": data.content || null
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
