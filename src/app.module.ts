import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@src/apps/users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/eventhub'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
