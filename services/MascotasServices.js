import { Mascota } from "../models/index.js";


class MascotasServices{


    getmMascotaInfoById = async (id) => {
      const mascota = await Mascota.findByPk(id);
      return mascota;
    };

    postMascotaService = async (data) => {
      const newMascota = await Mascota.create(data);
      console.log('Se agrego una nueva mascota')
      return newMascota;
    };

    getAllMascotasServices = async () => {
      const mascotas = await Mascota.findAll()
      return mascotas
    }

    putMascotaService = async (data, id) => {
      const mascota = await Mascota.findByPk(id)

      if (!mascota) {
        return null;
      }

      const mascotaModificada = await mascota.update(data)
      return mascotaModificada
    }

    deleteMascotaServiceById = async (id) => {
      const mascota = await Mascota.findByPk(id)

      if (!mascota) {
        return null;
      }

      await mascota.destroy()
      return mascota;
    }


}

export default MascotasServices;