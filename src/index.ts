import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import express from 'express'
import { useContainer } from 'typeorm';
import cors from 'cors';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';


import { AppDataSource } from './database/connection';
import { ContactResolver } from './resolvers/contactResolver';
// import { seedDatabase } from "./helpers/defaultUser";
import { UserResolver } from './resolvers/userResolver';

// register 3rd party IOC container
 useContainer(Container);

 function bootstrap() {
   const app = express();
   app.use(cors())
  const httpServer = http.createServer(app);
  try {
    AppDataSource.initialize()
    .then(async() => {
    // seed database with some data
    // const { defaultUser } = await seedDatabase();

    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      resolvers: [ContactResolver, UserResolver],
      container: Container,
    });

    // Create GraphQL server
    const server = new ApolloServer({ 
      schema,   
      context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
       plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer })
      ]
    });

    // Start the server
    const PORT = process.env.PORT || 4000
    await server.start();
    server.applyMiddleware({ app, path: '/api/v1' });
    await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at localhost:4000/${server.graphqlPath}`);
    })
  
  } catch (err) {
    console.error(err);
  }
}

bootstrap();