import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerbasicsModule } from './controllerbasics/controllerbasics.module';

@Module({
  imports: [ControllerbasicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
