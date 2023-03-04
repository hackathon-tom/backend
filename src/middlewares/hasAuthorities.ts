/**
 *
 */

import { NextFunction, Request, Response } from "express";

interface Authority {
  name: string;
}

export default (authorities: Authority[]) => {
  return (req: Response, res: Request, next: NextFunction) => {
    /**
     * check that the user (if there is any) have the authorities listed in the array
     * if he have them call next
     * otherwise throw an exception
     */
  };
};
