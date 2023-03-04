import Cors from "cors";

/**
 * TODO: developement and production version
 */
export default Cors({
  credentials: true,
  origin: ["*"],
});
