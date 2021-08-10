import { Request, Response} from 'express';

import sequelize from "../config/db.config";
import User, { UserAttributes } from '../../models/user';

export class UserLoggedIn {

    static async getUserLogin({ email }: any) {
        const collect: any = []
        const getData = await User.findOne({ where: { email: email }}).then(user => user!);

        if(getData == null) {
           return [{error: "Not thing found!"}]
            
        }else {
            return [{id:getData.id, username: getData.username, email: getData.email}];
        }
        
    }
}


