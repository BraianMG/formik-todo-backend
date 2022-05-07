import { Request, Response } from "express";

export const usersGet = async (_req: Request, res: Response) => {
  return res.status(200).json({
    msg: "GET /users",
  });
};
