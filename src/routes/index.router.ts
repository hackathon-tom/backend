import Express from "express";
import HttpException from "../utils/HttpException";

const Router = Express.Router();

Router.get("/", (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      running: 450795,
      status: "ON",
    });
  }, 1500);
});

export default Router;
