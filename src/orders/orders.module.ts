import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersMockService } from './orders-mock.service';
import { StoreService } from './store.service';
import { StoreModule } from 'src/store/store.module';
function createStore(config: facebookConfig): StoreService {
  console.log('123', config);
  return new StoreService();
}

interface facebookConfig {
  appId: 'string';
  appSecret: 'string';
}

const configFacebook = {
  appId: 'facebook001',
  appSecret: 'facebook002',
};

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: 'APP_FACEBOOK',
      useValue: configFacebook as facebookConfig,
    },
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
      inject: [
        {
          token: 'APP_FACEBOOK',
          optional: true,
        },
      ],
    },
  ],
  imports: [StoreModule],
})
export class OrdersModule {}
