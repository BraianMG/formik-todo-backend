import express, { Express } from "express";
import cors from "cors";
import { dbConnection } from "../database/config";
import { authRouter, todoRouter, userRouter } from "../routes";

export class Server {
  app: Express;
  host: string;
  port: number;
  authPath: string;
  usersPath: string;
  todosPath: string;

  constructor() {
    console.log(process.env.HOST, process.env.PORT, process.env.MONGODB_CNN, process.env.SECRETWJT)
    this.app = express();
    this.host = process.env.HOST || "0.0.0.0";
    // TODO: mejorar this.port
    this.port = 8080; // parseInt(process.env.PORT) || 8080;
    this.authPath = "/api/v1/auth";
    this.usersPath = "/api/v1/users";
    this.todosPath = "/api/v1/todos";
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.authPath, authRouter);
    this.app.use(this.usersPath, userRouter);
    this.app.use(this.todosPath, todoRouter);
  }

  async connectDB() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port, this.host, () =>
      console.log(`Server listening through port ${this.port}`)
    );
  }
}
