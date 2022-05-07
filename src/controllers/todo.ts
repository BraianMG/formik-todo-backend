import { Request, Response } from "express";

export const todosGet = async (_req: Request, res: Response) => {
  return res.status(200).json({
    msg: "GET /todos",
  });
};
