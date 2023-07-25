import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Todo{
    @Prop({required:true})
    todo: string;
    @Prop({required:true})
    isdone: boolean;
}

export const TODO_MODEL = Todo.name;
export type TodoDocument = Todo & Document;
const schema = SchemaFactory.createForClass(Todo);
export const TodoSchema = schema;