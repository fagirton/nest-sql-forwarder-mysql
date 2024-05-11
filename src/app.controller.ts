import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SqlPost } from './sql.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async postSql(
    @Body()
    sqlDto: SqlPost,
  ): Promise<string> {
    return await this.appService.postSql(sqlDto);
  }
}
