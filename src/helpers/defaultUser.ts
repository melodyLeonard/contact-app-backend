import { User } from "../entities/user";
import { Contact } from "../entities/contact";
import { AppDataSource } from '../database/connection';

export async function seedDatabase() {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository =  AppDataSource.getRepository(User);

  const defaultUser = userRepository.create({
    email: "test@github.com",
    firstName: "Michal",
    lastName: 'Lytek',
    password: "s3cr3tp4ssw0rd",
  });
  await userRepository.save(defaultUser);

  const [contact1, contact2] = contactRepository.create([
    {
      phoneNumber: "+2349033351286",
      email: "melodyleonard7@gmail.com",
      name: "Melody Leonard",
    },
    {
      phoneNumber: "+2349633434343",
      name: "Michael Jude"
    },
  ]);
  await contactRepository.save([contact1, contact2]);

  return {
    defaultUser,
  };
}

export type Lazy<T extends object> = Promise<T> | T;