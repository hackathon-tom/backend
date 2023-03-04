import Cors from "cors";
import DotEnv from "dotenv";
import Express from "express";
import Routes from "./routes/router";

DotEnv.config();

const port = parseInt(process.env.PORT || "3003");

const app = Express();

app.use(
  Cors({
    credentials: true,
    origin: "*",
  })
);
app.use(Express.json());

app.use(Routes);

app.listen(port, () => console.log("[server]:", port));
