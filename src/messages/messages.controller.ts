import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post()
  createUser(@Body() createMessageDto: CreateMessageDto): object {
    return this.messageService.create(createMessageDto);
  }
}
