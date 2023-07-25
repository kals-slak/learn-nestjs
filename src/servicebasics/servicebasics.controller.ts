import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe, UsePipes, UseGuards, UseInterceptors } from '@nestjs/common';
import { ServicebasicsService } from './servicebasics.service';
import { todo, todoSchema } from './interfaces/todo';
import { ObjValidate } from 'src/custompipes/objvalidate';
import { AuthGuard } from 'src/auth/auth.guard';
import { CleanupInterceptor } from 'src/cleanup/cleanup.interceptor';

@Controller('servicebasics')
@UseGuards(AuthGuard)
@UseInterceptors(CleanupInterceptor)
export class ServicebasicsController {
  constructor(private readonly servicebasicsService: ServicebasicsService) {}

  @Get()
  findAll(){
    return this.servicebasicsService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id:string){
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
  remove(@Param("id") id:string){
    return this.servicebasicsService.remove(id);
  }

}
