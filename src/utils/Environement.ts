import DotEnv from "dotenv";

DotEnv.config();

export default class Environment {
  /**
   * access all variables
   */
}

/**
 * each .env file gonna have it's own subobject
 */
const variables = {
  database: {},
  server: {},
};
