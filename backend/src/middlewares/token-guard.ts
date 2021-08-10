import jwt from 'jsonwebtoken';
import { IncomingHttpHeaders } from 'http';
import { RequestHandler } from 'express';
import { UserController } from '../controllers/user.controller';
import { Request, Response, NextFunction } from 'express';

const userController = new UserController();

export function getTokenFromHeaders(headers: IncomingHttpHeaders) {
    const header = headers.authorization as string;

    if (!header)
        return header 
    
    return header.split(' ')[1]
};

export const tokenGuard: (() => RequestHandler) = (() => async (
        req: Request, res: Response, next: NextFunction) => {
    const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || '';
    const hasAccess = await userController.verifyToken(token);

    if (!hasAccess){
        return res.status(403).send({ message: 'No access' });
    }
    
    return next()

    // hasAccess.then(a => {
    //     if (!a)
    //         return res.status(403).send({ message: 'No access' });
    // })
});

export const getUserLogin: (() => RequestHandler) = (() => async (
    req: Request, res: Response, next: NextFunction
) => {
    const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || '';
    const hasAccess = userController.getCurrentUser(token);
    if (hasAccess) {
        return res.json({data: hasAccess})
    }
    return next()
})


