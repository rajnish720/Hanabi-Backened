import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { usersController } from './users/users.controller';


@Module({
  //controllers: [usersController],
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/nestdb"), UsersModule, MongooseModule]
})

export class AppModule {}
