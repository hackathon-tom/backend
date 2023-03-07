/**
 * TODO IMPORTANT: configure csrf
 */

//import "./declarations.d.ts";

import "reflect-metadata";
import "express-async-errors";

import Express from "express";
import CookieParser from "cookie-parser";

import Database from "./database";
import Routes from "./routes/router";

import Cors from "./utils/Cors";
import Environment from "./utils/Environement";
import ErrorHandler from "./utils/ErrorHandler";
import Logger, { LogState } from "./utils/Logger";

const port = parseInt(Environment.get("backend.server.port") || "3003");

Database.initialize();

const app = Express();

app.use(Cors);
app.use(Express.json());
app.use(CookieParser());

app.use("/api", Routes);

app.use(ErrorHandler);

app.listen(port, () => Logger.log(LogState.SUCCESS, "server", String(port)));

import User from "./database/models/user.entity";

declare global {
  namespace Express {
    interface Request {
      user?: User;
      pipes: { [key: string]: any };
    }
  }
}
