import jwt from 'jsonwebtoken';
import { IncomingHttpHeaders } from 'http';
import { RequestHandler } from 'express';
import { UserController } from '../controllers/user.controller';
import { Request, Response, NextFunction } from 'express';

const userController = new UserController();

function getTokenFromHeaders(headers: IncomingHttpHeaders) {
    const header = headers.authorization as string 

    if (!header)
        return header 
    
    return header.split(' ')[1]
}

export const tokenGuard: (() => RequestHandler) = (() => (req: Request, res: Response, next: NextFunction) => {
    const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || ''
    const hasAccess = userController.verifyToken(token)

    hasAccess.then(a => {
        if (!a)
            return res.status(403).send({ message: 'No access' })
    })
})