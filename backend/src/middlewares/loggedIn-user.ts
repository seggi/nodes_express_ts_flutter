import jwt from 'jsonwebtoken';
import { UserAttributes } from '../../models/user';
import { UserLoggedIn } from "../controllers/loggedIn.controller";



class CheckLoggedIn {

    private static readonly _jwtSecret = 'nankim45';

    static async getUser(request: any){
        const userToken = request.headers.authorization;
        const token = userToken.split(' ');
        const getDict =  jwt.verify(token[1], this._jwtSecret);
        return await UserLoggedIn.getUserLogin(getDict)
    }
   
}

export default CheckLoggedIn;