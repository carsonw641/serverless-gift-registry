'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const aws_util_1 = require("/opt/aws-util");
const dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient();
module.exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);
    const params = aws_util_1.AwsUtil.generateItemParams(process.env.DYNAMODB_TABLE, data);
    dynamoDb.put(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t create the gift item.'));
            return;
        }
        ;
        const response = {
            statusCode: 200,
            body: JSON.stringify(result)
        };
        callback(null, response);
    });
};
