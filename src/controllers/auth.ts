import { Request, Response } from "express";

export const auth = async (_req: Request, res: Response) => {
  return res.status(200).json({
    msg: "POST /login",
  });
};
