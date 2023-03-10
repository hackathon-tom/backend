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

import { BUS_STOPS } from "./constants";

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
import Stop from "./database/models/stops.entity";
import Bus from "./database/models/bus.entity";

/*
const setup = async () => {
  for (let key in BUS_STOPS) {
    const Busrepository = Database.DataSource.getRepository(Bus);
    const StopRepository = Database.DataSource.getRepository(Stop);

    const bus = BUS_STOPS[key];

    const busEntity = (await Busrepository.findOneBy({ id: bus.id })) as Bus;

    bus.stops.forEach((s) => {
      const stop = new Stop();

      stop.bus = busEntity;
      stop.name = s.name;
      stop.latitude = `${s.latitude}`;
      stop.longitude = `${s.longitude}`;

      StopRepository.save(stop);
    });
  }
};

setTimeout(() => {
  setup();
}, 5000);
*/

declare global {
  namespace Express {
    interface Request {
      user?: User;
      pipes: { [key: string]: any };
    }
  }
}
