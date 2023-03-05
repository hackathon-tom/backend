import Express from "express";
import * as Jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import authenticate from "../middlewares/authenticate";
import isLoggedIn from "../middlewares/isLoggedIn";

const Router = Express.Router();

/**
 * TODO: add a middleware to handle the validation errors and return if there is any
 * TODO: middlewares to validate body
 */

Router.post(
  "/login",
  body("email").isEmail(),
  body("password").isStrongPassword(),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    /**
     * TODO: check if the email and password match any row in the database
     * TODO: if they don't return an error
     * TODO: otherwise create a token and send it
     */

    res.cookie("token", "token");
  }
);

Router.delete("/logout", (req, res) => {
  /**
   * TODO: remove the cookie
   */
});

Router.get("/", authenticate, isLoggedIn, (req, res) => {
  /**
   * TODO: return the authneticated user
   * TODO: remove the password from the user
   */

  res.json(req.user!);
});

/**
 * POST login (username and password)
 * DELETE logout
 * get getCurrentLoggedInUser
 */

export default Router;
