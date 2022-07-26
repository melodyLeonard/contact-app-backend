import { Service } from "typedi";
import { AppDataSource } from '../database/connection';
import { Contact } from '../entities/contact';
import { User } from '../entities/user';
import { ContactInput } from '../resolvers/types/contact-input';


@Service()
export default class ContactService {
    private contactRepository =  AppDataSource.getRepository(Contact);

    // SIGNUP
   async getSingleContact(contactId: number): Promise<Contact | null> {
    return await this.contactRepository.findOne({
        where:{
        id: contactId
    }});
    }

    //LOGIN
    async getListOfContacts(user:User):Promise<Contact[]> {
        return await this.contactRepository.find({
            where:{
                owner: {
                    id: user.id
                }
            }
        });
    }

    // ADD NEW USER
   async addNewContact(contactInput: ContactInput, user:User) {
        const contact = this.contactRepository.create({
            ...contactInput,
            owner: user,
        });
        return this.contactRepository.save(contact);
    }

     async deleteContact(id: number, user:User) {
        return await this.contactRepository.delete({
           id: id,
           owner:{
            id:  user.id
           }
        });
    }
}