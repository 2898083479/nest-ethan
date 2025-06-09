import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './controller/app.controller';
import { CatController } from './cat/cat.controller';
import { AppService } from './service/app.service';
import { CatService } from './cat/service/cat.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, CatController],
      providers: [AppService, CatService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
