import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';
import { CpuModule } from './cpu/cpu.module';
import { DiskModule } from './disk/disk.module';
import { PowerModule } from './power/power.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { OrdersModule } from './orders/orders.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';
import { ProductsModule } from './products/products.module';
import { ProductEntity } from './products/product.entity';
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'db.sqlite',
    //   entities: [User, Report],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'thangtm',
      password: 'thangtm',
      database: 'typeorm',
      entities: [ProductEntity],
      synchronize: true,
      logging: 'all',
      logger: 'advanced-console',
    }),
    MessagesModule,
    ComputerModule,
    CpuModule,
    DiskModule,
    PowerModule,
    UsersModule,
    ReportsModule,
    OrdersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
