import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 8080;
const SECRET = process.env.SECRET || "clave_secreta";

const DB_NAME = process.env.DB_NAME || "veterinaria";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASS || "root";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_DIALECT = process.env.DB_DIALECT || "mysql";
const DB_PORT = process.env.DB_PORT || 3306;

export { 
  SERVER_PORT, 
  SECRET,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_DIALECT,
  DB_PORT
};
