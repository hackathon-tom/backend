import * as Fs from "fs";
import DotEnv from "dotenv";

/**
 * TODO: interface for all environement variables
 * TODO: put environement variables in an object instead of a getter
 * TODO: first figure out if we are in a production or developement environement
 */
export default class Environment {
  private constructor() {}

  private static server: { [key: string]: string } = DotEnv.parse(
    Fs.readFileSync("./" + process.env.ENVIRONEMENT + ".server.env")
  );
  private static database: { [key: string]: string } = DotEnv.parse(
    Fs.readFileSync("./" + process.env.ENVIRONEMENT + ".database.env")
  );
  private static data: { [key: string]: string } = {
    ...this.server,
    ...this.database,
  };

  public static get(key: string): string {
    return this.data[key];
  }
}
