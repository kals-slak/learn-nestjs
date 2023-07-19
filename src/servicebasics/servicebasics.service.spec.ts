import { Test, TestingModule } from '@nestjs/testing';
import { ServicebasicsService } from './servicebasics.service';

describe('ServicebasicsService', () => {
  let service: ServicebasicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicebasicsService],
    }).compile();

    service = module.get<ServicebasicsService>(ServicebasicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
