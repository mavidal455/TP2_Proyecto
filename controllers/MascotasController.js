import MascotasServices from "../services/MascotasServices.js"

class MascotasController{
    mascotasServices = new MascotasServices();

    getMascotasPorDuenioController = async (req, res) => {
        try {
          const mascotas = await this.mascotasServices.getAllMascotasServices();
          if (!mascotas) {
            return res.status(204).json("No hay mascotas que mostrar");
          }
          return res.status(200).json({ success: true, message: mascotas });

        } catch (error) {
            console.log(error);
        }
      };

    //mascotas.getById
    mascotaInfo = async (req, res) => {
      try {
        const mascota = await this.mascotasServices.getmMascotaInfoById(req.params.id);

        if (!mascota) {
          return res.status(204).send("No existe el usuario en el servidor");
        }
        return res.status(200).json({ success: true, message: mascota });
        
      } catch (error) {
        return res.status(500).send("Error del servidor");
      }
    };
    
      //mascotas.post
      postMascotaController = async (req, res) => {
        console.log('entro al post')
        try {
          const mascota = await this.mascotasServices.getmMascotaInfoById(req.params.id)
          if (mascota) {
            return res.status(204).send("La mascota ya existe")
          }
          const nuevaMascota = await this.mascotasServices.postMascotaService(req.body);
          return res.status(200).json({ success: true, message: nuevaMascota });

        } catch (error) {
          return res.status(500).send("Error del servidor");
        }
      };
    
      //mascotas.put
      putMascotaController = async (req, res) => {
        try {
          const mascota = await this.mascotasServices.getmMascotaInfoById(req.params.id)
          if (!mascota) {
            return res.status(404).json("No existe el usuario");
          }
          const mascotaModificada = await this.mascotasServices.putMascotaService(req.body, req.params.id);
          return res.status(200).json({ success: true, message: mascotaModificada });
    
        } catch (error) {
          return res.status(500).json("Error del servidor");
        }
      };
    
      //app.delete(deleteUserById)
      deleteMascotaController = async (req,res) => {
        console.log('probando delete')
        try {
            const mascotaEliminada = await this.mascotasServices.deleteMascotaServiceById(req.params.id);
    
          if (!mascotaEliminada) {
            return res.status(204).json("No se pudo eliminar la mascota");
          }
    
          return res.status(200).json({ success: true, message: mascotaEliminada });
        } catch (error) {
          return res.status(500).json("Error del servidor");
        } 
      }
}

export default MascotasController