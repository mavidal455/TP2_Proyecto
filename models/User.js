import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
// import bcript

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING(50),
      allowNull: false,
      mail: true,
    },
    
    number: DataTypes.INTEGER,

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize: connection,
    modelName: "User",
  }
);


export default User;