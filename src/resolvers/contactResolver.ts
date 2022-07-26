
import { Arg, Ctx, Int, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { Inject, Service } from "typedi";
import { Contact } from '../entities/contact';
import ContactService from "../services/contact.service";
import { ContactInput } from "./types/contact-input";
import { Context } from "./types/context";
import {AuthorizedUser} from '../middleware/auth.middleware';

@Service()
@Resolver(() => Contact)
export class ContactResolver {
  constructor(
     @Inject()
    private readonly contactService: ContactService
  ) {}

  @Query(() => Contact, { nullable: true })
  @UseMiddleware(AuthorizedUser)
  contact(@Arg("contactId", () => Int) contactId: number) {
    return this.contactService.getSingleContact(contactId)
  }

  @Query(() => [Contact])
  @UseMiddleware(AuthorizedUser)
  userContacts(@Ctx()  { storage: {user}}: Context): Promise<Contact[]> {
    return this.contactService.getListOfContacts(user)
  }

  @UseMiddleware(AuthorizedUser)
  @Mutation(() => Contact)
  addContact(@Arg("input") contactInput: ContactInput, @Ctx() { storage:{user} }: Context): Promise<Contact> {
    return this.contactService.addNewContact(contactInput, user);
  }

  @UseMiddleware(AuthorizedUser)
  @Mutation(() => String)
  deleteContact(@Arg("id") id: number, @Ctx() { storage:{user} }: Context): String {
     this.contactService.deleteContact(id, user);
     return 'contact deleted'
  }
}