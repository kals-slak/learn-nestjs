import { Request, Response, NextFunction } from "express";

export function mustHeaders(req:Request, res:Response, next:NextFunction){
    console.log("entered into middleware");
    res.set("Cache-Control","none");
    next();
}