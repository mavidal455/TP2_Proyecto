import User from "./user.js";
import Mascota from "./Mascota.js";

//Enlaza las tablas 

User.hasMany(Mascota, {
    foreignKey: "mascotaId"
})
Mascota.belongsTo(User, {
    foreignKey: "mascotaId"
})

export {User, Mascota}

