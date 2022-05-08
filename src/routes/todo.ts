import { Router } from "express";
import { check } from "express-validator";
import { todosDelete, todosPost, todosPut, todosGet } from "../controllers";
import { errorValidation, validateJWT } from "../middlewares";

export const todoRouter = Router();

todoRouter.get("/", [validateJWT], todosGet);

todoRouter.post(
  "/",
  [
    validateJWT,
    check("title", "The Title is required").trim().escape().notEmpty(),
    errorValidation,
  ],
  todosPost
);

todoRouter.put(
  "/:id",
  [
    validateJWT,
    check("title", "The Title is required").trim().escape().notEmpty(),
    errorValidation,
  ],
  todosPut
);

todoRouter.delete("/:id", [validateJWT], todosDelete);
