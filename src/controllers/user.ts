import { Request, Response } from "express";
import { User } from "../models";
import bcryptjs from "bcryptjs";
import { IUser } from "../interfaces";

export const usersGet = async (req: Request, res: Response) => {
  try {
    const { limit = 20, from = 0 } = req.query;

    const filter = { disabled: false };

    const [total, users] = await Promise.all([
      User.countDocuments(filter),
      User.find(filter).skip(Number(from)).limit(Number(limit)),
    ]);

    res.status(200).json({
      total,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const usersPost = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role }: IUser = req.body;

    const user = new User({ name, email, password, role });

    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const usersPut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { ...dataUser }: IUser = req.body;

    const salt = bcryptjs.genSaltSync(10);
    dataUser.password = bcryptjs.hashSync(dataUser.password, salt);

    const user = await User.findByIdAndUpdate(id, dataUser, { new: true });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const usersDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(
      id,
      { disabled: true },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
