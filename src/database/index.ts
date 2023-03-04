import * as TypeORM from "typeorm";

import Environment from "../utils/Environement";
import Logger, { LogState } from "../utils/Logger";

/**
 * TODO: move it to it's own method
 * TODO: maybe store the datasource inside of req.source / req.data / req.datasource for a better ux
 */
class Database {
  public static DataSource = new TypeORM.DataSource({
    type: "mysql",
    host: Environment.get("backend.database.host"),
    port: parseInt(Environment.get("backend.database.port")),
    username: Environment.get("backend.database.username"),
    password: Environment.get("backend.database.password"),
    database: Environment.get("backend.database.database"),
    entities: ["./src/database/models/*.entity.ts"],
    logging: true,
    synchronize: true,
  });

  public static initialize() {
    this.DataSource.initialize()
      .then(() => {
        Logger.log(LogState.ERROR, "database", "connected");
      })
      .catch(() => {
        Logger.log(LogState.ERROR, "database", "error");
        process.exit(1);
      });
  }
}

export default Database;
