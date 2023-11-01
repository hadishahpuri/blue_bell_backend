import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';
import { CreateMessageDto } from './dto/create-message.dto';

Injectable();
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  create(createMessageDto: CreateMessageDto): Promise<Message> {
    return new this.messageModel(createMessageDto).save();
  }
}
