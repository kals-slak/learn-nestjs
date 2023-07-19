import { Test, TestingModule } from '@nestjs/testing';
import { ServicebasicsController } from './servicebasics.controller';
import { ServicebasicsService } from './servicebasics.service';

describe('ServicebasicsController', () => {
  let controller: ServicebasicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicebasicsController],
      providers: [ServicebasicsService],
    }).compile();

    controller = module.get<ServicebasicsController>(ServicebasicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
