import Express from "express";
import { body, query } from "express-validator";
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
    const latitude1 = req.query["latitude-1"];
    const longitude1 = req.query["longitude-1"];
    const latitude2 = req.query["latitude-2"];
    const longitude2 = req.query["longitude-2"];

    /**
     * coordinates have to be inside of oran
     * if distance of walk is more than 500 metres we suggest taking a taxi
     */
  }
);

export default Router;
