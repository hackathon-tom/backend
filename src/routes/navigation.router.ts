import Express from "express";
import { body, query } from "express-validator";

import PathFinder from "../utils/PathFinder";
import validate from "../validations/validate";

const Router = Express.Router();

/**
 * receive longitude and latitude in body
 * return an array of stops
 */
Router.post(
  "/shortest-path",
  /*
  validate([
    body("latitude-1").isNumeric(),
    body("longitude-1").isNumeric(),
    body("latitude-2").isNumeric(),
    body("longitude-2").isNumeric(),
  ]),
  */
  async (req, res) => {
    const latitude1 = parseFloat(req.body["latitude-1"] as string);
    const longitude1 = parseFloat(req.body["longitude-1"] as string);
    const latitude2 = parseFloat(req.body["latitude-2"] as string);
    const longitude2 = parseFloat(req.body["longitude-2"] as string);

    console.log("HERE", latitude1, longitude1, latitude2, longitude2);

    const stops = await PathFinder.getPath(
      { latitude: latitude1, longitude: longitude1 },
      { latitude: latitude2, longitude: longitude2 }
    );

    console.log("st:", stops);

    res.status(200).json(stops);

    /**
     * TODO: coordinates have to be inside of oran
     * TODO: if distance of walk is more than 500 metres we suggest taking a taxi
     */
  }
);

export default Router;
