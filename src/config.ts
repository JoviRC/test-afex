import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    DYNAMODB_ENDPOINT: process.env.DYNAMODB_ENDPOINT,
  };
});
