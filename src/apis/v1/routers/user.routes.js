import { Router } from "express";
const UserRouter = Router();
import userController from "../controllers/user.controller";

UserRouter.post("/create-information", userController.createInformation);
UserRouter.post("/create-profile", userController.createProfile);
UserRouter.get("/get-users", userController.getUsers);

export default UserRouter;
