import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from "typeorm";

import { User } from "./user";
import { Lazy } from "../helpers/defaultUser";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Contact {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field()
  @Column()
  phoneNumber: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.contacts,{ lazy: true })
  owner: Lazy<User>;
}