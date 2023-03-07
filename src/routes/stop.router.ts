import Express from "express";
import Database from "../database";
import Bus from "../database/models/bus.entity";
import Stop from "../database/models/stops.entity";
import HttpException from "../utils/HttpException";

const Router = Express.Router();

/**
 * get alla vailable stops
 * get a specific stop
 * get all stops of a bus
 *
 * create a stop for a bus
 * delete a stop
 */

/**
 * TODO: with pagination
 */
Router.get("/", async (req, res) => {
  const stops = await Database.DataSource.getRepository(Stop).find();
  res.status(200).json(stops);
});

Router.get("/:stopId", async (req, res) => {
  const stopId = parseInt(req.params.stopId);
  const stop = await Database.DataSource.getRepository(Stop).findOneBy({
    id: stopId,
  });
  if (stop === undefined || stop === null || !stop)
    throw new HttpException("invalid stop id provided", 404, [
      "invalid stop id provided",
    ]);

  res.status(200).json(stop);
});

/**
 * get stops of a specific bus
 */
Router.get("/bus/:busId", async (req, res) => {
  const busId = parseInt(req.params.busId);
  const bus = await Database.DataSource.getRepository(Bus).findOneBy({
    id: busId,
  });

  if (bus === null || bus === undefined || !bus)
    throw new HttpException("invalid bus id provided", 404, [
      "invalid bus id provided",
    ]);

  const stops = await Database.DataSource.getRepository(Stop).findBy({
    bus: bus,
  });

  res.status(200).json(stops);
});

export default Router;
