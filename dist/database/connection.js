"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    database: "d2pu4r2hf51vo9",
    username: "kumftsbsclqfmz",
    password: "90f87aeb11dc269ecd9c24c0a2e46fed3eef7a0cc14a6d0f705150957879349a",
    port: 5432,
    host: "localhost",
    entities: ["./src/entities/*{.ts,.js}"],
    subscribers: [],
    migrations: [],
    synchronize: true,
    logger: "advanced-console",
    logging: false,
    dropSchema: false,
    cache: true,
});
