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
    MongooseModule.forRoot('mongodb://localhost:27017',{
      dbName: 'test'
    }) // 连接mongodb
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
