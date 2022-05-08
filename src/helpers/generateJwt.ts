import jwt from "jsonwebtoken";
import { TokenPayload } from "../interfaces";

export const generateJWT = (payload: TokenPayload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRETJWT || "",
      { expiresIn: "24h" },
      (err, token) => {
        if (err) {
          reject("The Token could not be generated");
        } else {
          resolve(token);
        }
      }
    );
  });
};
