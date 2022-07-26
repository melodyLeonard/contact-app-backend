"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    database: "contact",
    username: "postgres",
    password: "postgres",
    port: 5432,
    host: "localhost",
    entities: ["./src/entities/*{.ts,.js}"],
    subscribers: [],
    migrations: [],
    synchronize: true,
    logger: "advanced-console",
    logging: "all",
    dropSchema: false,
    cache: true,
});
