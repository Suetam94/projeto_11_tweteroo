import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "projeto_11_tweteroo",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: ["./src/database/migration/*.ts"],
  subscribers: [],
});
