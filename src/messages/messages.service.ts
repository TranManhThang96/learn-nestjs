import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // messageRepo: MessagesRepository;

  // constructor(messageRepo: MessagesRepository) {
  //   this.messageRepo = messageRepo;
  // }

  constructor(
    public messageRepo: MessagesRepository,
    public messageRepo2: MessagesRepository,
    public messageRepo3: MessagesRepository,
    public messageRepo4: MessagesRepository,
  ) {
    console.log(messageRepo === messageRepo2); // true
    console.log(messageRepo3 === messageRepo4); // true
    console.log(
      messageRepo3, // MessagesRepository {}
      typeof messageRepo3, // object
      messageRepo3 instanceof MessagesRepository, // true
    );
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
