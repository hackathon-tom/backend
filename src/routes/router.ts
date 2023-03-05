import Express from "express";

import IndexRouter from "./index";
import UsersRouter from "./users";
import AuthentificationRouter from "./autnetification";

const Router = Express.Router();

Router.use("/", IndexRouter);
Router.use("/users", UsersRouter);
Router.use("/authentication", AuthentificationRouter);

export default Router;
