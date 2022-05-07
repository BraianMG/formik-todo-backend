import { Router } from "express";
import { todosGet } from "../controllers";

export const todoRouter = Router();

// TODO: implementar Middlewares
todoRouter.get("/", [], todosGet);