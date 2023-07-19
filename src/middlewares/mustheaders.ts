import { Request, Response, NextFunction } from "express";

export function mustHeaders(req:Request, res:Response, next:NextFunction){
    console.log("entered into route");
    res.set("Cache-Control","none");
    next();
}