import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entity/user/user';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
    imports: [], // 使用 TypeOrmModule.forFeature 注册实体
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}