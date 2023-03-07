import Express from "express";
import { body, validationResult } from "express-validator";
import Database from "../database";
import { AuthorityType } from "../database/models/authority.entity";
import Bus from "../database/models/bus.entity";
import authenticate from "../middlewares/authenticate";
import hasAuthorities from "../middlewares/hasAuthorities";
import isLoggedIn from "../middlewares/isLoggedIn";
import HttpException from "../utils/HttpException";
import validate from "../validations/validate";

const Router = Express.Router();

/**
 * TODO: get all avaiable buses (with pagination)
 */
Router.get("/", async (req, res) => {
  const buses = await Database.DataSource.getRepository(Bus).find();

  res.status(200).json(buses);
});

Router.get("/:busId", async (req, res) => {
  const busId = parseInt(req.params.busId);
  const bus = await Database.DataSource.getRepository(Bus).findBy({
    id: busId,
  });
  if (bus === null || bus === undefined || !bus)
    throw new HttpException("invaid bus id provided", 404, [
      "no bus with this id",
    ]);
  res.status(200).json(bus);
});

/**
 * TODO: receive the stops along with this route
 */
Router.post(
  "/",
  authenticate,
  isLoggedIn,
  hasAuthorities([AuthorityType.CREATE_BUSES]),
  validate([
    body("name").isString().isLength({ min: 2, max: 16 }),
    body("price").isNumeric(),
  ]),
  async (req, res) => {
    const { name, price } = req.body;

    let bus = new Bus();

    bus.name = name;
    bus.price = price;

    bus = await Database.DataSource.getRepository(Bus).save(bus);

    res.status(200).json(bus);
  }
);

Router.delete(
  "/:busId",
  authenticate,
  isLoggedIn,
  hasAuthorities([AuthorityType.DELETE_BUSES]),
  async (req, res) => {
    const busId = parseInt(req.params.busId);
    const result = await Database.DataSource.getRepository(Bus).delete({
      id: busId,
    });
    if (
      result.affected === 0 ||
      result === null ||
      result == undefined ||
      !result
    )
      throw new HttpException("invaid bus id provided", 404, [
        "no bus with this id",
      ]);
    res.sendStatus(200);
  }
);

export default Router;
