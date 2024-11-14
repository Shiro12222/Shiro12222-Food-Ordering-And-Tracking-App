import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUserMiddleware);
router.post("/",jwtCheck, MyUserController.createCurrentUserMiddleware);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, MyUserController.updateCurrentUserMiddleware);

export default router;