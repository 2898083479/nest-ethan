import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatSchema } from 'src/schema/cat/types';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('MONGODB_URL'),
    MongooseModule.forFeature([{ name: 'CatModel', schema: CatSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
