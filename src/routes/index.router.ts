import Express from "express";

const Router = Express.Router();

Router.get("/", (req, res) => {
  res.status(200).json({
    running: 450795,
    status: "ON",
  });
});

export default Router;
