import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe, UsePipes } from '@nestjs/common';
import { ServicebasicsService } from './servicebasics.service';
import { todo, todoSchema } from './interfaces/todo';
import { ObjValidate } from 'src/custompipes/objvalidate';

@Controller('servicebasics')
export class ServicebasicsController {
  constructor(private readonly servicebasicsService: ServicebasicsService) {}

  @Get()
  findAll(): todo[]{
    return this.servicebasicsService.findAll();
  }

  @Get(":id")
  findById(@Param("id", ParseIntPipe) id:number): todo{
    return this.servicebasicsService.findById(id);
  }

  @Post()
  @UsePipes(new ObjValidate(todoSchema))
  add(@Body() todo: todo){
    this.servicebasicsService.add(todo);
    return "todo added";
  }

  @Put()
  update(@Body() todo: todo){
    return this.servicebasicsService.update(todo);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id:number){
    return this.servicebasicsService.remove(id);
  }

}
