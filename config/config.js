import { env } from "node:process";

const SERVER_PORT = env.SERVER_PORT;
const SECRET = env.SECRET;


export { SERVER_PORT, SECRET };
