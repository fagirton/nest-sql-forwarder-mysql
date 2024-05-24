import { Injectable } from '@nestjs/common';
import { SqlPost } from './sql.dto';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';

@Injectable()
export class AppService {
  constructor(@InjectClient() private readonly connection: Connection) {}

  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  getHello(): string {
    return 'Hello World!';
  }

  async postSql(dto: SqlPost): Promise<string> {
    const resultObj: Array<object> = [];
    for (let i = 0; i < dto.queries.length; i++) {
      const element = dto.queries[i];
      const data = await this.connection.query(element);
      await this.delay(300);
      // DROPS UNNESSECARY DATA
      resultObj.push(data[0]);
    }
    return JSON.stringify(Object.assign([{}], resultObj));
  }
}
