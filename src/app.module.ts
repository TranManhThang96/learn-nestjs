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
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
    }),
    MessagesModule,
    ComputerModule,
    CpuModule,
    DiskModule,
    PowerModule,
    UsersModule,
    ReportsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
