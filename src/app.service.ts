import { Injectable } from '@nestjs/common';
import { SqlPost } from './sql.dto';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';

@Injectable()
export class AppService {
  constructor(@InjectClient() private readonly connection: Connection) {}

  getHello(): string {
    return 'Hello World!';
  }

  async postSql(dto: SqlPost): Promise<string> {
    const data = await this.connection.query(dto.query);
    return JSON.stringify(Object.assign([{}], data));
  }
}
