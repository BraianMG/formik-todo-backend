import { Router } from "express";
import { check } from "express-validator";
import { auth } from "../controllers";
import { errorValidation } from "../middlewares";

export const authRouter = Router();

// TODO: implementar Middlewares
authRouter.post(
  "/login",
  [
    check("*", "are required").trim().escape().notEmpty(),
    check("email", "not an email").isEmail().normalizeEmail(),
    check("password", "The Password must have at least 8 characters").isLength({
      min: 8,
    }),
    errorValidation,
  ],
  auth
);
