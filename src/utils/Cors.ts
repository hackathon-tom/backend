import Cors from "cors";

/**
 * TODO: developement and production version
 */
export default Cors({
  credentials: true,
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
});
