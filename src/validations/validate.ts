import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";
import HttpException from "../utils/HttpException";

export default (validations: ValidationChain[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    validations.forEach((validation) => validation(req, res, next));

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("errors:", errors.array);
      throw new HttpException(
        "errors in fields, data nor well formated",
        400,
        errors.array()
      );
    }

    console.log("[system]:", "validation passed");

    next();
  };
};
