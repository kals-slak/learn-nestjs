import { Module } from '@nestjs/common';
import { ServicebasicsService } from './servicebasics.service';
import { ServicebasicsController } from './servicebasics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TODO_MODEL, TodoSchema } from './Schemas/todo.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:TODO_MODEL, schema:TodoSchema}])],
  controllers: [ServicebasicsController],
  providers: [ ServicebasicsService]
})
export class ServicebasicsModule {}
