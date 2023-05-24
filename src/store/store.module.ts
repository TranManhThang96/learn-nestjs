import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreConfig } from './store.interface';

@Module({
  providers: [
    StoreService,
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dirname: 'store',
        filename: 'user.json',
      } as StoreConfig,
    },
  ],
  exports: [StoreService],
})
export class StoreModule {}
