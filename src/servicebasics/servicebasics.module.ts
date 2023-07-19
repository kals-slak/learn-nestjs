import { Module } from '@nestjs/common';
import { ServicebasicsService } from './servicebasics.service';
import { ServicebasicsController } from './servicebasics.controller';

@Module({
  controllers: [ServicebasicsController],
  providers: [ServicebasicsService]
})
export class ServicebasicsModule {}
