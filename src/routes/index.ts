import Express from "express";

const Router = Express.Router();

Router.get("/", (req, res) => {
  res.send("Hello world !");
});

export default Router;
