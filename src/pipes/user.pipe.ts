import { NextFunction, Request, Response } from "express";

/**
 * TODO: in the params we receive the path variable / query params we are working on + if it's a query param on a path variable
 */

export enum PipeType {
  PATH_VARIABLE,
  QUERY_PARAM,
}

/**
 * TODO: better design, if there is an error what we do ?
 */

/**
 * dsqdsqdsq
 * @param type: if it's in the path variables or the query params or the body (body isn't supported yet)
 * @param value: tha path variable / query param value
 */
export default (type: PipeType, value: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userId =
      type === PipeType.PATH_VARIABLE
        ? req.path[value as any]
        : req.params[value];

    /**
     * TODO: at first place pipes gonna be null (not an empty object), so always make sure to make it an empty object if it's null
     */

    req.pipes[value] = userId;

    next();
  };
};
