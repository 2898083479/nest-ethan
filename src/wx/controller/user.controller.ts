import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @Get()
    // findAll() {
    //     return this.userService.findAll();
    // }
}