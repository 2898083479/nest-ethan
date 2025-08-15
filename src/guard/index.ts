import {
  EXPAY_CATEGORY,
  ResponseCode,
  getResponseMessage,
} from 'src/common/response-code';
import { HttpException } from '@nestjs/common';

export const throwUnauthorizedException = (message?: string) => {
  throw new HttpException(
    {
      category: EXPAY_CATEGORY,
      code: ResponseCode.UNAUTHORIZED,
      message: message ?? getResponseMessage(ResponseCode.UNAUTHORIZED),
    },
    200,
    {
      cause: '',
    },
  );
};
