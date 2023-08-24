import {TOKEN_SECRET} from '../config'
import jwt from 'jsonwebtoken'
export function createAccessToken(payload){
    return new Promise((resolve,rejet)=>{
        jwt.sign(
            payload,TOKEN_SECRET,
        {
            expiresIn:'1d',
        },
        (err,token)=>{
            if(err)console.log(err);
            resolve(token)
        }
        )
    })
}
