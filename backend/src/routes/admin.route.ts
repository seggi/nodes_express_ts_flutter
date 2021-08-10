import jwt from 'jsonwebtoken';
import { UserController } from "../controllers/user.controller";
import { Router, Request, Response, RequestHandler, NextFunction } from "express";
import { getTokenFromHeaders } from "../middlewares/token-guard";

const adminRouter: Router = Router();



// export const getUserLogin: (() => RequestHandler) = (() => async (
//     req: Request, res: Response, next: NextFunction
// ) => {
//     const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || '';
//     const hasAccess = UserController.getCurrentUser(token);
//     console.log(hasAccess, "LLL")
//     return next()
// })


 adminRouter.get('/loggin_user', (req, res) => {
    const usertoken:any = req.headers.authorization;
    const token = usertoken.split(' ');
    const getUser = jwt.verify(token[1], 'nankim45');


    return res.json({ data: getUser })
})

export default adminRouter;

function getCurrentUser(): any {
    throw new Error("Function not implemented.");
}

