import { Test, TestingModule } from '@nestjs/testing';
import { CannabisService } from './cannabis.service';

describe('CannabisService', () => {
  let service: CannabisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CannabisService],
    }).compile();

    service = module.get<CannabisService>(CannabisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
