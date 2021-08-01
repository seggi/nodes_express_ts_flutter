import { Router, Request, Response } from "express";

const adminRouter: Router = Router();

adminRouter.get('/', (req, res) => {
    return res.json("nk-auth-admin")
})

export default adminRouter;

