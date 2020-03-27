'use strict'

import {DynamoDB} from 'aws-sdk';

// @ts-ignore
import {AwsUtil} from 'aws-util';

const dynamoDb = new DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);
}