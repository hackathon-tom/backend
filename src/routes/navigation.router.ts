import Express from "express";
import { query } from "express-validator";

import PathFinder from "../utils/PathFinder";
import validate from "../validations/validate";

const Router = Express.Router();

/**
 * receive longitude and latitude in body
 * return an array of stops
 */
Router.get(
  "/shortest-path",
  validate([
    query("latitude-1").isNumeric(),
    query("longitude-1").isNumeric(),
    query("latitude-2").isNumeric(),
    query("longitude-2").isNumeric(),
  ]),
  async (req, res) => {
    const latitude1 = parseInt(req.query["latitude-1"] as string);
    const longitude1 = parseInt(req.query["longitude-1"] as string);
    const latitude2 = parseInt(req.query["latitude-2"] as string);
    const longitude2 = parseInt(req.query["longitude-2"] as string);

    const stops = await PathFinder.getPath(
      { latitude: latitude1, longitude: longitude1 },
      { latitude: latitude2, longitude: longitude2 }
    );

    res.status(200).json(stops);

    /**
     * TODO: coordinates have to be inside of oran
     * TODO: if distance of walk is more than 500 metres we suggest taking a taxi
     */
  }
);

export default Router;
