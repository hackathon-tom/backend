/*
import Mysql from "mysql2";

const pool = Mysql.createPool({
  host: "dsq",
  port: 3000,
  user: "dsq",
  password: "dsq",
  database: "dsq",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

export default pool;
*/

import * as TypeORM from "typeorm";

const DataSource = new TypeORM.DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "admin",
  password: "admin",
  database: "hackathon",
  entities: ["./src/database/models/*.entity.ts"],
  logging: true,
  synchronize: true,
});

export default DataSource;
