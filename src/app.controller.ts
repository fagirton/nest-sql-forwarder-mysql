import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
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
    try {
      const data = await this.appService.postSql(sqlDto);
      return data;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: String(error),
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}
