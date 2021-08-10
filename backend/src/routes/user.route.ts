import bcrypt from 'bcrypt';
import { Router, Request, Response } from "express";
import { matchedData } from "express-validator/filter";
import { validationResult } from "express-validator/check";

import { userRules } from "../rules/user.rules";
import User, { UserAttributes } from '../../models/user';

import { UserController } from "../controllers/user.controller";


const userRouter = Router();


const userController = new UserController();

        
userRouter.post('/register',userRules['forRegister'], (req: Request, res: Response) => {
    const errors = validationResult(req.body)
    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    // const payload: any = matchedData(req.body)
    const user = userController.register(req.body)
    return user.then(u => {
        res.json(u)
    })
})

userRouter.post('/login', userRules['forLogin'], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
        return res.status(422).json(errors.array())


    User.findOne({ where: { email: req.body.email } })
    .then((user: any) => {
        bcrypt.compare(req.body.password, user!.password, function( err:any, results){
            if(err){
                throw new Error(err)
                }
            if (results) {
                const payload = matchedData(req) as UserAttributes
                const token = userController.login(payload)
                return token.then(t => res.json(t))
                }
                else {
                    res.json({ error: "Invalid credencial" })
            }
        })
    })
    
})


export default userRouter;

