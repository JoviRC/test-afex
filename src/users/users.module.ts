import { UserController } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { environment } from '../enviroments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
  ],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
