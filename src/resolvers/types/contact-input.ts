import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Contact } from '../../entities/contact';


@InputType()
export class ContactInput implements Partial<Contact> {
  @Field()
  name: string;

  @Field()
  phoneNumber: string;

  @Field({ nullable: true })
  @IsEmail()
  email: string;
}