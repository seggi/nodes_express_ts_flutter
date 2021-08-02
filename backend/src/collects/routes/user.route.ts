import { Request, Response, Router } from "express";
import { UserController } from "../controllers/user.controller";


const router = Router();
const userController = new UserController();
   
router.post("/auth", )

router.get("/", "")
router.get("/auth", userController.create)

export default router;