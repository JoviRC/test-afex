import { UserController } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { environment } from '../enviroments';
import config from '../config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        AWS_PUBLIC_CLUSTER_NAME: Joi.string().required(),
        AWS_REGION: Joi.string().required(),
        AWS_ACCESS_KEY_ID: Joi.string().required(),
        AWS_SECRET_ACCESS_KEY: Joi.string().required(),
        DYNAMODB_ENDPOINT: Joi.string().required(),
      }),
    }),
  ],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
