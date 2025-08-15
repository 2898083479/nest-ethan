import { HttpException, HttpStatus } from '@nestjs/common';

export class MyException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}
