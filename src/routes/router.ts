import Express from "express";

import IndexRouter from "./index";

const Router = Express.Router();

Router.use("/", IndexRouter);

export default Router;
