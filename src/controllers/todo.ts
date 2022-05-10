import { Request, Response } from "express";
import { ITodo } from "../interfaces";
import { Todo } from "../models";

export const todosGet = async (req: Request, res: Response) => {
  try {
    const filter = {
      deleted: false,
    };
    const tasks = await Todo.find(filter);

    res.status(200).json({
      tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const todosPost = async (req: Request, res: Response) => {
  try {
    const { title, description }: ITodo = req.body;

    const data = {
      title,
      description,
    };

    const newTodo = new Todo(data);

    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {}
};

export const todosPut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { ...dataTodo }: ITodo = req.body;

    const todo = await Todo.findByIdAndUpdate(id, dataTodo, { new: true });

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const todosDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndUpdate(
      id,
      { deleted: true },
      { new: true }
    );

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
