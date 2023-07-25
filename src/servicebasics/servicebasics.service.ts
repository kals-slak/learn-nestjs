import { BadRequestException, Inject, Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { todo } from './interfaces/todo';
import { REQUEST } from '@nestjs/core';
import { TODO_MODEL, TodoDocument } from './Schemas/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ServicebasicsService {
    // constructor(@Inject(REQUEST) private request: Request) {}
    constructor(@InjectModel(TODO_MODEL) private readonly TodoModel:Model<TodoDocument>){}
    private todos: todo[] = [];

    async add(val: todo){
        try{
            const todo = await this.TodoModel.create(val);
            return todo;
        }
        catch(err){
            if(err.name == "ValidationError"){
                throw new BadRequestException(err.errors);
            }
            throw new ServiceUnavailableException();
        }
    }

    async findById(id: string){
        const todo = await this.TodoModel.findById(id);
        if(!todo){
            throw new NotFoundException("todo not found");
        }
        return todo;
    }

    async findAll(){
        const todos = await this.TodoModel.find();
        if(!todos){
            throw new NotFoundException("no todos exist");
        }
        return todos;
    }

    async update(todo: todo){
        const updatedtodo = await this.TodoModel.findByIdAndUpdate(todo._id, todo);
        if(!updatedtodo){
            throw new NotFoundException("todo doesn't exist");
        }
        return updatedtodo;
    }

    async remove(id:string){
        const deletedTodo = await this.TodoModel.findByIdAndDelete(id); 
        if(!deletedTodo){
            throw new NotFoundException("todo not exist");
        }
        return {_id:id};
    }
}
