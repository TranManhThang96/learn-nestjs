import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // messageRepo: MessagesRepository;

  // constructor(messageRepo: MessagesRepository) {
  //   this.messageRepo = messageRepo;
  // }

  constructor(public messageRepo: MessagesRepository) {}

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
