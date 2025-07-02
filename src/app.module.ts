import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CatModule } from './wx/cat.module';
import { DogModule } from './wx/dog.module';
import { UserModule } from './wx/user.module';
import { NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatModule, 
    DogModule,
    UserModule,
    TypeOrmModule.forRoot({ // 连接mysql
      autoLoadEntities: true, // 设置为true时，使用forFeature注册的实体,会自动添加到entities中
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      // entities: [User],
      synchronize: true, // 不应该在生产环境中使用，否则会丢失数据
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/test') // 连接mongodb
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
