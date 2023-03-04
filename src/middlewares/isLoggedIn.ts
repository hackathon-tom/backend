import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  /**
   * check the context, if there is a user inside we call next
   * otherwise we throw an exception
   */
};
