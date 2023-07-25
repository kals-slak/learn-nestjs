const Joi = require('joi');


export interface todo{
    _id:string;
    todo: string;
    isdone: boolean;
}

export const todoSchema = Joi.object({
    todo: Joi.string().required(),
    isdone: Joi.boolean().required(),
  })