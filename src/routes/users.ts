import Express from "express";
import { body } from "express-validator";
import Database from "../database";
import Authority, { AuthorityType } from "../database/models/authority.entity";
import User from "../database/models/user.entity";
import authenticate from "../middlewares/authenticate";
import hasAuthorities from "../middlewares/hasAuthorities";
import isLoggedIn from "../middlewares/isLoggedIn";
import HttpException from "../utils/HttpException";

const Router = Express.Router();

Router.get("/", (req, res) => {
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

Router.get("/:userId", (req, res) => {});

Router.post(
  "/",
  body("email").isEmail(),
  body("password").isStrongPassword(),
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
    user.password = req.body.password;

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

Router.put("/", (req, res) => {});

Router.delete("/", (req, res) => {});

export default Router;
