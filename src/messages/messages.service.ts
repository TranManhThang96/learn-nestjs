import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  messageRepo: MessageRepository;

  constructor() {
    // Service is creating its own dêpndencies
    // DONT DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION
    this.messageRepo = new MessageRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(message: string) {
    return this.messageRepo.create(message);
  }
}
