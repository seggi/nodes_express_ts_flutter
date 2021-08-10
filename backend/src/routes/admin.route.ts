import { UserController } from "../controllers/user.controller";
import { Router, Request, Response, RequestHandler, NextFunction } from "express";
import { getTokenFromHeaders } from "../middlewares/token-guard";

import CheckLoggedIn from "../middlewares/loggedIn-user";

const adminRouter: Router = Router();


// export const getUserLogin: (() => RequestHandler) = (() => async (
//     req: Request, res: Response, next: NextFunction
// ) => {
//     const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || '';
//     const hasAccess = UserController.getCurrentUser(token);
//     console.log(hasAccess, "LLL")
//     return next()
// })


 adminRouter.get('/loggin_user', async (req, res) => {
    console.log(req.headers.authorization, "KKK")
    const getUser = await CheckLoggedIn.getUser(req)
    console.log( getUser, "HHHH");
    return res.json({ data: getUser })
})

export default adminRouter;

function getCurrentUser(): any {
    throw new Error("Function not implemented.");
}