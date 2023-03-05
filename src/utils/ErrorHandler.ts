import { NextFunction, Request, Response } from "express";
import HttpException from "./HttpException";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("[system]: handling error");

  if (!(err instanceof HttpException)) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
      status: 500,
      errors: [err.message],
    });
  }

  const error = err as HttpException;

  res.status(error.status).send({
    message: error.message,
    status: error.status,
    errors: error.errors,
  });
};
