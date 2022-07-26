
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { Inject, Service } from "typedi";
import { User } from '../entities/user';
import UserService from '../services/user.service';
import { Context } from "./types/context";
import { LoginResponse } from './types/login-response';
import { LoginInput, SignUpInput } from "./types/user-input";
import { AuthorizedUser } from '../middleware/auth.middleware';

@Service()
@Resolver(User)
export class UserResolver {
  constructor(
    @Inject()
    private readonly userService: UserService
  ) {}


  @Query(() => User, { nullable: true })
  @UseMiddleware(AuthorizedUser)
  async me(@Ctx() { storage: {user} }: Context) {
    console.log('----->',user)
    return await this.userService.getMe(user)
  }

  // Signup user
  @Mutation(() => String)
  async signup(@Arg("input") {...dto}: SignUpInput): Promise<String> {
    return await this.userService.signup({...dto});
  }

  // Signup user
  @Mutation(() => LoginResponse)
  async login(@Arg("input") {...dto}: LoginInput): Promise<LoginResponse> {
    return await this.userService.login({...dto})
  }
  
}