import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../../.env` });

const dynamoClient = new DynamoDBClient({
  region: 'us-east-1',
  endpoint: process.env.DYNAMODB_ENDPOINT,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

console.log('apikey', process.env.AWS_ACCESS_KEY_ID);
const docClient = DynamoDBDocumentClient.from(dynamoClient);

export default docClient;
