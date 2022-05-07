import { Router } from "express";
import { auth } from "../controllers";

export const authRouter = Router();

// TODO: implementar Middlewares
authRouter.post("/login", [], auth);
