import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerbasicsModule } from './controllerbasics/controllerbasics.module';
import { ServicebasicsModule } from './servicebasics/servicebasics.module';

@Module({
  imports: [ControllerbasicsModule, ServicebasicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  
}
