import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql';

@Module({
  imports: [
    MysqlModule.forRootAsync({
      useFactory: () => ({
        host: 'localhost',
        database: 'dcmods_copy',
        password: 'vsMods',
        user: 'vsMods',
        port: 3306,
      }),
    }),
  ],
})
export class MysqlDbModule {}
