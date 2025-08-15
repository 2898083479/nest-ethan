import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'root',
    operationId: 'root',
  })
  root() {
    return this.appService.hello();
  }

  @Get('/status')
  @ApiOperation({
    summary: 'status',
    operationId: 'status',
  })
  @ApiResponse({
    type: '',
  })
  getStatus() {
    return this.appService.getStatus();
  }
}
