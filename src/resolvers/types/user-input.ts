import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { User } from '../../entities/user';


@InputType()
export class SignUpInput implements Partial<User> {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password:string
}

@InputType()
export class LoginInput implements Partial<User> {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password:string
}