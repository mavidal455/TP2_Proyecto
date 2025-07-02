import User from "./user.js";
import Mascota from "./Mascota.js";

//Enlaza las tablas 

User.hasMany(Mascota, {
    foreignKey: "userId"
})
Mascota.belongsTo(User, {
    foreignKey: "userId"
})

export {User, Mascota}

