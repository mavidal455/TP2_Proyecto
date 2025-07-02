import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const generateToken = (data) => {
  const token = jwt.sign({ data }, SECRET, { expiresIn: "1h" });
  return token;
};

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET);
  return decoded;
};
