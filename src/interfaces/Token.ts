import { JwtPayload } from "jsonwebtoken";

export interface TokenPayload extends JwtPayload {
  id: string;
  email: string;
  name: string;
  role: string;
  google: boolean;
}
