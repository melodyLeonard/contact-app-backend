import {randomBytes, pbkdf2Sync} from 'crypto'

export const hashPassword = async(password:string):Promise<string> =>{
 const salt = await randomBytes(16).toString('hex');
 return await pbkdf2Sync(password, salt, 
    1000, 64, `sha512`).toString(`hex`);
}

export const validPassword = async({password, salt}:{password:string, salt:string}):Promise<boolean> =>{
    const hash = await pbkdf2Sync(password, 
    salt, 1000, 64, `sha512`).toString(`hex`);
    return hash === hash;
};
  