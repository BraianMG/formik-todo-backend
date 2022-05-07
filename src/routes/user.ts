import { Router } from "express";
import { usersGet } from "../controllers";

export const userRouter = Router();

// TODO: implementar Middlewares
userRouter.get("/", [], usersGet);