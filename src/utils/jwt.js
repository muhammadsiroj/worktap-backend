import 'dotenv/config'
import jwt from 'jsonwebtoken';

export const sign = (payload) => {
        return jwt.sign(payload, process.env.JWT_KEY )
    }

export const verify = (token) => {
        try {
            return jwt.verify(token, process.env.JWT_KEY);
        } catch (err) {
            console.log(err);
        }
    } 
 