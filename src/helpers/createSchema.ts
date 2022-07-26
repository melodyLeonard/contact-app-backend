import { buildSchema } from 'type-graphql';
import { ContactResolver } from '../resolvers/contactResolver';
import { UserResolver } from '../resolvers/userResolver';

export const createSchema = () =>
  buildSchema({
    resolvers: [
      ContactResolver,
      UserResolver
    ],
    authChecker: ({ context: { req } }) => !!req.session.userId,
  });
