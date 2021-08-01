import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import bluebird from 'bluebird';


import { User, UserInterface } from "../models/user.model";

export class UserController {

    private readonly _saltRounds = 12;
    private readonly _jwtSecret = 'nankim45_#'

    static get userAttributes() {
        return ['id', 'email'];
    }

    private static _user: any
    
    static get user() {
        return UserController._user;
    }

    register({ email, password }: UserInterface) {
        return bcrypt.hash(password, this._saltRounds)
            .then(hash => {
                return User.create({ email, password: hash})
                    .then(u => this.getUserById(u!.id))
            })
    }

    login({ email }: UserInterface ) {
        return User.findOne({ where: {email}})
            .then(u => {
                const { id, email } = u!
                return { token: jwt.sign({ id, email }, this._jwtSecret)}
            })
    }

    verifyToken(token:string) {
        return new Promise(( resolve, reject ) => {
            jwt.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false)
                    return
                }

                UserController._user = User.findByPk(decoded?.id)
                resolve(true)
                return
            })
        }) as Promise<boolean>
    }

    getUserById(id: number) {
        return User.findByPk(id, {
            attributes: UserController.userAttributes
        }) as bluebird<UserInterface>
    }
}