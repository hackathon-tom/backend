import Jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

import Database from "../database";

import Environment from "../utils/Environement";
import User from "../database/models/user.entity";

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  const verification = Jwt.verify(
    token,
    Environment.get("backend.server.secret")
  );

  if (!verification) return next();

  const email = Jwt.decode(token) as string;

  const user = await Database.DataSource.getRepository(User).findOneBy({
    email,
  });

  req.user = user == null ? undefined : user;

  next();
};
