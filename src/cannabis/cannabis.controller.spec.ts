import { Test, TestingModule } from '@nestjs/testing';
import { CannabisController } from './cannabis.controller';
import { CannabisService } from './cannabis.service';

describe('CannabisController', () => {
  let controller: CannabisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CannabisController],
      providers: [CannabisService],
    }).compile();

    controller = module.get<CannabisController>(CannabisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
