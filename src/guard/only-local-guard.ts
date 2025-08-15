import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { throwUnauthorizedException } from '.';

@Injectable()
export class OnlyLocalGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    if (!/^(::ffff:127.0.0.1|(172|192)(\.\d{1,3}){3}|::1)/.test(String(ip))) {
      throwUnauthorizedException();
      return false;
    }

    return true;
  }
}
