import Cors from "cors";
import DotEnv from "dotenv";
import Express from "express";

import Routes from "./routes/router";
import DataSource from "./database";
import Logger, { LogState } from "./utils/Logger";

DotEnv.config();

const port = parseInt(process.env.PORT || "3003");

const app = Express();

DataSource.initialize()
  .then(() => {
    Logger.log(LogState.ERROR, "database", "connected");
  })
  .catch(() => {
    Logger.log(LogState.ERROR, "database", "error");
    process.exit(1);
  });

app.use(
  Cors({
    credentials: true,
    origin: "*",
  })
);
app.use(Express.json());

app.use(Routes);

app.listen(port, () => Logger.log(LogState.SUCCESS, "server", String(port)));
