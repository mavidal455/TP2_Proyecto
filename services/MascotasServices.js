import { Mascota } from "../models/index.js";


class MascotasServices{


    getmMascotaInfoById = async (id) => {
      const mascota = await Mascota.findByPk(id);
      return mascota;
    };

    postMascotaService = async (data) => {
      const newMascota = await Mascota.create(data);
      console.log(newMascota)
      return newMascota;
    };

}

export default MascotasServices;