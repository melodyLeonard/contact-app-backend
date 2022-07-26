import {DataSource} from 'typeorm';

    export const AppDataSource = new DataSource({
      type: "postgres",
      database: "d2pu4r2hf51vo9",
      username: "kumftsbsclqfmz", // fill this with your username
      password: "90f87aeb11dc269ecd9c24c0a2e46fed3eef7a0cc14a6d0f705150957879349a", // and password
      port: 5432, // and port
      host: "ec2-3-217-14-181.compute-1.amazonaws.com", // and host
      entities: [__dirname + "/../entities/*{.ts, .js}"],
      subscribers: [],
      migrations: [],
      synchronize: true,
      logger: "advanced-console",
      logging: false,
      dropSchema: false,
      cache: true,
      ssl: true
    });