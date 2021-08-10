import { Request, Response } from 'express';



import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  bluebird from "bluebird";


import sequelize from "../config/db.config";
import User, { UserAttributes } from '../../models/user';

export class UserController {
    static getCurrentUser(token: any) {
        throw new Error("Method not implemented.");
    }
    private readonly _saltRounds = 12;
    private readonly _jwtSecret = 'nankim45';

    static get userAttributes() {
        return ['id', 'email', 'firstname', 'lastname',
             'username', 'sex', 'phone', 'address', 'birthdate']
    }

    private static _user: any;

    static get user() {
        return UserController._user;
    }

    async register({ 
            firstname,lastname,username,
            sex, phone, address,birthdate,
            email, password }: UserAttributes) {
    
        const hash = await bcrypt.hash(password, this._saltRounds);
        const u = await User.create({ 
            firstname, lastname, username,
            sex, phone, address,birthdate,
            email, password: hash });
        return this.getUserById(u!.id);
    }

    async login({ email }: UserAttributes) {
        return await User.findOne({ where: { email }}).then( u => {
            const { id, email } = u!
            return  { token: jwt.sign({id, email}, this._jwtSecret)}
        })
    }

    async verifyToken(token: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded: any) => {
                if (err) {
                    resolve(false)
                    return 
                }
                UserController._user = User.findByPk(decoded['id']) 
                resolve(true)
                return 
            })
        }) as Promise<any>
    }

    async getCurrentUser(token:string)  {
        return jwt.verify(token, this._jwtSecret, async (err, decodedToken) => {
            if (err) {
                return
            }
            else {
                UserController._user = await User.findByPk(decodedToken?.id);
                // return UserController._user
            }
        })
    }

    getUserById(id: number) {
        return User.findByPk(id, {
            attributes: UserController.userAttributes
        }) as bluebird<UserAttributes>
    }
}