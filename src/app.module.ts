import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    UsersModule,
    MessagesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
