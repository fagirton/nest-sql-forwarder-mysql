import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlDbModule } from './mysql.module';

@Module({
  imports: [MysqlDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
