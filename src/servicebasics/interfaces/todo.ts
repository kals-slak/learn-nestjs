const Joi = require('joi');


export interface todo{
    id: number;
    todo: string;
    isdone: boolean;
}

export const todoSchema = Joi.object({
    id: Joi.number().required(),
    todo: Joi.string().required(),
    isdone: Joi.boolean().required(),
  })