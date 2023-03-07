import Express from "express";

import IndexRouter from "./index.router";
import UsersRouter from "./users.router";
import StopsRouter from "./stop.router";
import BusRouter from "./bus.router";
import NavigationRouter from "./navigation.router";
import AuthentificationRouter from "./autnetification..router";

const Router = Express.Router();

Router.use("/", IndexRouter);
Router.use("/buses", BusRouter);
Router.use("/users", UsersRouter);
Router.use("/stops", StopsRouter);
Router.use("/navigation", NavigationRouter);
Router.use("/authentication", AuthentificationRouter);

export default Router;
