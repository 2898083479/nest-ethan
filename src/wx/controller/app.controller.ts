import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Req,
} from '@nestjs/common';
import { AppService } from '../../service/app.service';

interface RequestBody {
  name: string;
  age: number;
}

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  getHello2(): string {
    return this.appService.getHello2();
  }

  @Get('hello3')
  findAll(@Req() request: RequestBody): string {
    return 'Hello World!';
  }

  @Get('hello4/*splat')
  @Header('Cache-Control', 'none')
  @HttpCode(HttpStatus.OK)
  findAll2() {
    return 'Hello World!';
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `This action resturn a #${id} cat`;
  // }

  @Get('async')
  async findAll3(): Promise<any> {
    return [
      {
        id: 1,
        name: 'Cat',
        age: 2,
      },
      {
        id: 2,
        name: 'Dog',
      },
    ];
  }
}
