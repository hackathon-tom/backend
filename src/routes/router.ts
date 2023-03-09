import Express from "express";

import BusRouter from "./bus.router";
import StopsRouter from "./stop.router";
import UsersRouter from "./users.router";
import IndexRouter from "./index.router";
import NavigationRouter from "./navigation.router";
import AuthentificationRouter from "./authentication.router";

const Router = Express.Router();

Router.use("/", IndexRouter);
Router.use("/buses", BusRouter);
Router.use("/users", UsersRouter);
Router.use("/stops", StopsRouter);
Router.use("/navigation", NavigationRouter);
Router.use("/authentication", AuthentificationRouter);

export default Router;
