import { Sequelize } from "sequelize";

//crea, configura y exporta instancia de conexion de 
// sequelize, luego la conecta a MySQL
const connection = new Sequelize("veterinaria", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,//8889 para mamp 3306 para xamp// 1433 para sqlserver
});

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
export default connection;
