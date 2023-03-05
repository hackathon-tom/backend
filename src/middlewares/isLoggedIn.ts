import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/HttpException";

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.user == null || req.user == undefined || !req.user)
    throw new HttpException("unauthorised", 403, ["login first"]);

  next();
};
