import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  /**
   * take the cookie stored inside of the request and parse it
   * check if it's a valid one and if it is, get the associated user and store it in req.user
   */
};
