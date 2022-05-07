import { config } from "dotenv";
import { Server } from "./models";

config({ path: './src/.env' });

const server = new Server();

server.listen();
