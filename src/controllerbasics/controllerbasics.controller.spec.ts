import { Test, TestingModule } from '@nestjs/testing';
import { ControllerbasicsController } from './controllerbasics.controller';
import { ControllerbasicsService } from './controllerbasics.service';

describe('ControllerbasicsController', () => {
  let controller: ControllerbasicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerbasicsController],
      providers: [ControllerbasicsService],
    }).compile();

    controller = module.get<ControllerbasicsController>(ControllerbasicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
