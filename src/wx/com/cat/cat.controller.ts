import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CatService } from 'src/wx/com/cat/service/cat.service';
import { Cat } from 'src/schema';
import { Response } from '../../../common';
import { getResponseMessage, ResponseCode } from 'src/common/response-code';

@Controller('cats')
export class CatController<T> {
  response = new Response();

  constructor(private readonly catService: CatService<T>) {}

  @Post()
  create(@Body() cat: Cat) {
    const result = this.catService.createCat(cat);
    if (!result) {
      this.response = {
        category: '0001',
        code: ResponseCode.OPERATING_FAILED,
        message: getResponseMessage(ResponseCode.OPERATING_FAILED),
      };
      return this.response;
    }
    this.response = {
      category: '0001',
      code: ResponseCode.OPERATING_SUCCESSFULLY,
      message: getResponseMessage(ResponseCode.OPERATING_SUCCESSFULLY),
    };
    return this.response;
  }

  @Get()
  queryCat(@Query() id: string) {
    const result = this.queryCat(id);
    if (!result) {
      this.response = {
        category: '0001',
        code: ResponseCode.OPERATING_FAILED,
        message: getResponseMessage(ResponseCode.OPERATING_FAILED),
      };
      return this.response;
    }
    this.response = {
      category: '0001',
      code: ResponseCode.OPERATING_SUCCESSFULLY,
      message: getResponseMessage(ResponseCode.OPERATING_SUCCESSFULLY),
    };
    return this.response;
  }
}
