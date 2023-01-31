import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { TOKEN_MAX_AGE } from "./consts.mjs";
dotenv.config();
export const maxAge = TOKEN_MAX_AGE;
export const createToken = (data) => {
  const secret = process.env.TOEKN_SECRET;
  if (!secret) throw new Error("No TOEKN_SECRET was provided");
  return jwt.sign({ data }, secret, {
    expiresIn: maxAge,
  });
};
