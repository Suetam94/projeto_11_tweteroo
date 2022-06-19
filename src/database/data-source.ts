import "reflect-metadata";
import { DataSource } from "typeorm";

import { SignUp } from "./entity/SignUp";
import { Tweets } from "./entity/Tweets";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "projeto_11_tweteroo",
  synchronize: true,
  logging: false,
  entities: [SignUp, Tweets],
  migrations: ["./src/database/migration/*.ts"],
  subscribers: [],
});
