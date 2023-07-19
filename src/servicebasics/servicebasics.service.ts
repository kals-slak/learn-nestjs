import { Injectable } from '@nestjs/common';
import { todo } from './interfaces/todo';

@Injectable()
export class ServicebasicsService {
    private todos: todo[] = [];

    add(val: todo): void{
        this.todos.push(val);
    }

    findById(id: number): todo{
        // console.log("todo is: "+JSON.stringify(this.todos.filter((t)=> t.id == id)[0])+" id is"+id);
        return this.todos.filter((t)=> t.id == id)[0];

    }

    findAll(): todo[]{
        return this.todos;
    }

    update(todo: todo){
        let ind:number = this.todos.findIndex((t)=> t.id==todo.id);
        this.todos[ind] = todo;
    }

    remove(id:number){
        let ind:number = this.todos.findIndex((t)=> t.id==id);
        this.todos.splice(ind,1);
    }
}
