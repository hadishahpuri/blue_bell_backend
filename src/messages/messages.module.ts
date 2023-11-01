import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './message.schema';
import { MessageController } from './messages.controller';
import { MessageService } from './messages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessagesModule {}
