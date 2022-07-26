import {DataSource} from 'typeorm';

    export const AppDataSource = new DataSource({
      type: "postgres",
      database: "contact",
      username: "postgres", // fill this with your username
      password: "postgres", // and password
      port: 5432, // and port
      host: "localhost", // and host
      entities: ["./src/entities/*{.ts,.js}"],
      subscribers: [],
      migrations: [],
      synchronize: true,
      logger: "advanced-console",
      logging: "all",
      dropSchema: false,
      cache: true,
    });