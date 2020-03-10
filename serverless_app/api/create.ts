'use strict'

import {DynamoDB} from 'aws-sdk';
import {AwsUtil} from '/opt/aws-util';

const dynamoDb = new DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);
  
  const params = AwsUtil.generateItemParams(
    process.env.DYNAMODB_TABLE, data);

  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.error(error)
      callback(new Error('Couldn\'t create the gift item.'))
      return
    };

    const response = {
      statusCode: 200,
      body: JSON.stringify(result)
    };

    callback(null, response);
  });
}

