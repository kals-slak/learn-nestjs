import { Test, TestingModule } from '@nestjs/testing';
import { ControllerbasicsService } from './controllerbasics.service';

describe('ControllerbasicsService', () => {
  let service: ControllerbasicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControllerbasicsService],
    }).compile();

    service = module.get<ControllerbasicsService>(ControllerbasicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
