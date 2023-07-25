import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerbasicsModule } from './controllerbasics/controllerbasics.module';
import { ServicebasicsModule } from './servicebasics/servicebasics.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ControllerbasicsModule,
     ServicebasicsModule
    ,ConfigModule.forRoot()
    ,MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService:ConfigService)=>{
          const uri = configService.get("mongourl");
          console.log(uri);
          return {uri};
      }
      ,inject:[ConfigService]
    })
    // ,MongooseModule.forRoot("mongodb://127.0.0.1:27017/demo1") 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {   
}
