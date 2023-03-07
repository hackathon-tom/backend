import BCrypt from "bcrypt";
import Express from "express";

import { body } from "express-validator";

import Database from "../database";
import User from "../database/models/user.entity";
import Authority, { AuthorityType } from "../database/models/authority.entity";

import HttpException from "../utils/HttpException";

import isLoggedIn from "../middlewares/isLoggedIn";
import authenticate from "../middlewares/authenticate";
import hasAuthorities from "../middlewares/hasAuthorities";

const Router = Express.Router();

Router.get("/", (req, res) => {
  // get list of users
  res.send("valid");
});

Router.get(
  "/me",
  authenticate,
  isLoggedIn,
  hasAuthorities([
    AuthorityType.WRITE,
    AuthorityType.DELETE,
    AuthorityType.READ,
  ]),
  (req, res) => {
    res.status(200).json(req.user);
  }
);

Router.get("/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await Database.DataSource.getRepository(User).findOneBy({
    id: userId,
  });
  if (user == null)
    throw new HttpException("invalid userId provided", 404, ["invalid userId"]);
  return res.status(200).json(user);
  /**
   * create dtos to remove the password
   */
});

Router.post(
  "/",
  body("email").isEmail(),
  body("password").isString().isLength({ min: 8, max: 64 }),
  body("username").isString().isLength({ min: 2, max: 25 }),
  async (req, res, next) => {
    if (
      (await Database.DataSource.getRepository(User).findOneBy({
        email: req.body.email,
      })) != null
    )
      throw new HttpException("user with this email already exist", 403, [
        "invalid email",
      ]);

    let user = new User();

    /**
     * TODO: hash the password
     */

    user.username = req.body.username;
    user.email = req.body.email;
    user.password = await BCrypt.hashSync(req.body.password, 10);

    user = await Database.DataSource.getRepository(User).save(user);

    let authority = new Authority();

    authority.type = AuthorityType.READ;
    authority.user = user;

    authority = await Database.DataSource.getRepository(Authority).save(
      authority
    );

    user = (await Database.DataSource.getRepository(User).findOneBy({
      id: user.id,
    })) as User;

    res.status(200).json(user);
  }
);

/**
 * TODO: route to update the user
 */
//Router.put("/", (req, res) => {});

Router.delete("/", authenticate, isLoggedIn, async (req, res) => {
  const result = await Database.DataSource.getRepository(User).delete({
    id: req.user?.id,
  });
  if (result.affected === 0)
    throw new HttpException("something went wrong", 500, [
      "something went wrong",
    ]);
  return res.sendStatus(200);
});

export default Router;
