import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
  compare = async (plaintextPassword) => {
    const comparePass = await bcrypt.compare(plaintextPassword, this.password);
    return comparePass;
  };
}

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

User.beforeCreate(async(user) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

export default User;