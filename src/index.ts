/**
 * TODO IMPORTANT: configure csrf
 */

//i always feel like
//somebody's watching meeeeeee 👀
//i have the same feeling

import Express from "express";

import Database from "./database";
import Routes from "./routes/router";

import Cors from "./utils/Cors";
import Environment from "./utils/Environement";
import Logger, { LogState } from "./utils/Logger";

const port = parseInt(Environment.get("backend.server.port") || "3003");

Database.initialize();

const app = Express();

app.use(Cors);
app.use(Express.json());

app.use("/api", Routes);

app.listen(port, () => Logger.log(LogState.SUCCESS, "server", String(port)));

interface UserInterface {
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserInterface;
      pipes: { [key: string]: any };
    }
  }
}
