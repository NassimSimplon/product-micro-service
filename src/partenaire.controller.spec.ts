import { Test, TestingModule } from '@nestjs/testing';
import { PartenaireController } from './partenaire.controller';
import { PartenaireService } from './partenaire.service';

describe('AppController', () => {
  let partenaireController: PartenaireController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PartenaireController],
      providers: [PartenaireService],
    }).compile();

    partenaireController = app.get<PartenaireController>(PartenaireController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(partenaireController).toBe('Hello World!');
    });
  });
});
