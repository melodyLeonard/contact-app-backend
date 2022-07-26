import { sign } from 'jsonwebtoken';
import { Service } from "typedi";
import { AppDataSource } from '../database/connection';
import { User } from '../entities/user';
import { hashPassword, validPassword } from '../helpers/password';
import { LoginResponse } from '../resolvers/types/login-response';
import { LoginInput, SignUpInput } from '../resolvers/types/user-input';


@Service()
export default class UserService {
    private userRepository =  AppDataSource.getRepository(User);

    // SIGNUP
   async signup({password,email, ...signUpInput}: SignUpInput): Promise<String> {
    const user = await this.userRepository.findOne({
      where:{
        email
    }
    });
    if(!user){
        const passwordHash = await hashPassword(password)
        const newUser = await this.userRepository.create({
            email,
            password: passwordHash,
            ...signUpInput,
        });
        await this.userRepository.save(newUser);
        return `Accounts successflly created, please login to view dashboard`
    }
    return `This user already exist`
    }

    //LOGIN
    async login({password,email}: LoginInput): Promise<LoginResponse> {
       const user = await this.userRepository.findOne({
        where:{
            email
        }
        });
        if(!user){
            throw new Error(
                'SignIn Failed!, Incorrect email or password',
            );
        }

        const isValidPasswordHash = await validPassword({password, salt: user.password }) 
        if(!isValidPasswordHash){
            throw new Error(
                'SignIn Failed!, Incorrect email or password',
            );
        }

        const payload = {
            email: user.email,
            id: user.id,
            firstName: user?.firstName,
            lastName: user.lastName
        };

        return {
            accessToken: sign({user:payload}, 'somerandomsecrete', { expiresIn: 60 * 60 * 7 } ),
        }; 
    }

    // GET CURRENT USE DETAILS
   async getMe(user:User ): Promise<User | null> {
    return await this.userRepository.findOne({
        where:{
            id: user.id
        },
        relations:{
            contacts: true
        }
    })
   }
}