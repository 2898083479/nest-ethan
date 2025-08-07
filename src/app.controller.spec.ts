import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './wx/controller/app.controller';
import { CatController } from './wx/com/cat/cat.controller';
import { DogController } from './wx/com/dog/dog.controller';
import { AppService } from './service/app.service';
import { CatService } from './wx/com/cat/service/cat.service';
import { DogService } from './wx/com/dog/service/dog.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, CatController, DogController],
      providers: [AppService, CatService, DogService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
