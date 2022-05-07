import dotenv from "dotenv";
import { Server } from "./models";

dotenv.config({ path: './src/.env' });

const server = new Server();

server.listen();
