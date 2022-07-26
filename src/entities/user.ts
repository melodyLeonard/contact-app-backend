import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";

import { Contact } from "./contact";
import { Lazy } from "../helpers/defaultUser";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Contact, contact => contact.owner, { lazy: true, cascade: true, })
  @Field(() => [Contact])
  contacts: Lazy<Contact[]>;
}