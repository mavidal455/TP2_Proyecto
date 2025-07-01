import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";


class Mascota extends Model {}

    Mascota.init(
        {
            nombre: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            especie: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            raza: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },            
            duenio: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        },

        {
            sequelize: connection,
            modelName: "Mascota",
        }
    );

    export default Mascota