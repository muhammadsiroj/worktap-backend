import  bcrypt  from 'bcrypt';
import { Salt } from './constants.js';



export const hashed = (pass) =>{
     const hash = bcrypt.hashSync(pass,Salt);
     return hash 
     
} 

export const comped = (pass,hashedPass) => {
    return  bcrypt.compareSync(pass,hashedPass)
}
 