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
