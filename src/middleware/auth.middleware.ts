import { verify } from "jsonwebtoken";
import { MiddlewareInterface, NextFn } from "type-graphql";
import { Service } from "typedi";
import { Context } from '../resolvers/types/context';

@Service()
export class AuthorizedUser implements MiddlewareInterface<Context> {
  constructor() {}

  async use({ context }:{context: any}, next: NextFn) {
    const authorization = context.req.headers["authorization"];

    if (!authorization) {
        throw new Error("Not authenticated");
    }

    try {
        const [bearer, token] = authorization.split(" ");
        if(bearer !== 'Bearer'){
            throw new Error("Invalid token format, please prefix token with 'Bearer ' ");
        }
        const payload = verify(token, "somerandomsecrete");
        context.storage = payload as any;
    } catch (err) {
        throw new Error("Not authenticated");
    }
    return next();
  }
}