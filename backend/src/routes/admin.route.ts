import { UserController } from "../controllers/user.controller";
import { Router, Request, Response, RequestHandler, NextFunction } from "express";
import { getTokenFromHeaders } from "../middlewares/token-guard";

import CheckLoggedIn from "../middlewares/loggedIn-user";

const adminRouter: Router = Router();



 adminRouter.get('/loggin_user', async (req, res) => {
    const getUser = await CheckLoggedIn.getUser(req)
    return res.json({ data: getUser })
})

export default adminRouter;

function getCurrentUser(): any {
    throw new Error("Function not implemented.");
}
