import Express from "express";
import * as Jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import authenticate from "../middlewares/authenticate";
import isLoggedIn from "../middlewares/isLoggedIn";
import Environment from "../utils/Environement";
import Database from "../database";
import User from "../database/models/user.entity";
import HttpException from "../utils/HttpException";
import validate from "../validations/validate";

import BCrypt from "bcrypt";

const Router = Express.Router();

/**
 * TODO: add a middleware to handle the validation errors and return if there is any
 * TODO: middlewares to validate body
 */
Router.post(
  "/login",
  validate([
    body("email").isEmail(),
    body("password").isString().isLength({ min: 8, max: 256 }),
  ]),
  async (req, res) => {
    const { email, password } = req.body;

    const user = await Database.DataSource.getRepository(User).findOneBy({
      email,
    });

    if (user === null || user === undefined || !user)
      throw new HttpException("invalid email provided", 403, [
        "invalid email provided",
      ]);

    const verification = await BCrypt.compareSync(password, user.password);

    if (verification == false)
      throw new HttpException("invalid password", 403, ["invalid password"]);

    const token = Jwt.sign(email, Environment.get("backend.server.secret"));

    /**
     * TODO: check if the email and password match any row in the database
     * TODO: if they don't return an error
     * TODO: otherwise create a token and send it
     */

    res.cookie("token", token);

    res.status(200).send(user);
  }
);

Router.delete("/logout", authenticate, isLoggedIn, (req, res) => {
  res.setHeader(
    "Set-Cookie:",
    "token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  );
  res.sendStatus(200);
});

Router.get("/", authenticate, isLoggedIn, (req, res) => {
  /**
   * TODO: remove the password from the user
   */

  res.json(req.user!);
});

export default Router;
