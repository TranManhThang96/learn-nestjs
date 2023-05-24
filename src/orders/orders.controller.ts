import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { StoreService } from './../store/store.service';

interface facebookConfig {
  appId: 'string';
  appSecret: 'string';
}

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject('APP_FACEBOOK') appFacebook: facebookConfig,
    private storeService: StoreService,
  ) {
    storeService.save({ name: 'thang', age: 22 });
  }
}
