import { Module } from '@nestjs/common';
import { ControllerbasicsService } from './controllerbasics.service';
import { ControllerbasicsController } from './controllerbasics.controller';

@Module({
  controllers: [ControllerbasicsController],
  providers: [ControllerbasicsService]
})
export class ControllerbasicsModule {}
