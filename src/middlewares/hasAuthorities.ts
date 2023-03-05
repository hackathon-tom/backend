/**
 *
 */

import { NextFunction, Request, Response } from "express";
import { AuthorityType } from "../database/models/authority.entity";
import HttpException from "../utils/HttpException";

export default (authorities: AuthorityType[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user!;

    const missing: string[] = [];

    authorities.forEach((authority) => {
      if (user.authorities.findIndex((a) => a.type === authority) === -1)
        missing.push(authority.toString());
    });

    if (missing.length > 0)
      throw new HttpException(
        "missing authorities",
        401,
        missing.map((authority) => "missing " + authority + " authority")
      );

    next();
  };
};
