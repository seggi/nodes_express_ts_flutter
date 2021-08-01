import jwt from "jsonwebtoken";
import { IncommingHttpHeaders } from 'http';
import { RequestHandler } from 'express';
import { UserController  } from "../controllers/user.controller";


const userController =  new UserController();

functoin getTokenFromHeaders(headers: IncommingHttpHeaders) {
    const header = headers.authorization as string;

    if (!header)
        return header  
    return header.split(' ')[1]
}

export const tokenGuard: (() => RequestHandler ) = (() => (req, res, next) => {
    const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || ''
    const hasAccess = userController.verifyToken(token)

    hasAccess.then(a => {
        if (!a) 
            return res.status(403).send({ message: 'No access' })
        next()
    })
})