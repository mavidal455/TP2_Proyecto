import MascotasServices from "../services/MascotasServices"

class MascotasController{
    mascotasServices = new MascotasServices();

    getMascotasPorDuenioController = async (req, res) => {
        try {
          const mascotas = await this.mascotasServices.getAMascotasPorDuenioServices();
          if (!mascotas) {
            return res.status(204).json("No hay mascotas con ese duenio");
          }
          return res.status(200).json({ success: true, message: mascotas });

        } catch (error) {
            console.log(error);
        }
      };
    
      //mascotas get by id ✅
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
    
      //mascotas.post ✅
      postMascotaController = async (req, res) => {
        try {
          const mascota = await this.mascotasServices.getmMascotaInfoById(req.params.id)
          if (mascota) {
            return res.status(204).send("El usuario ya existe")
          }
          const nuevaMascota = await this.mascotasServices.postMascotaService(req.body);
          return res.status(200).json({ success: true, message: nuevaMascota });

        } catch (error) {
          return res.status(500).send("Error del servidor");
        }
      };
    
      //app.put
      putMascotaController = async (req, res) => {
        try {
          const user = await this.userServices.getUserServiceById(req.params.id)
          if (!user) {
            return res.status(404).json("No existe el usuario");
          }
          const userModificado = await this.userServices.putUserServiceById(req.body, req.params.id);
          return res.status(200).json({ success: true, message: userModificado });
    
        } catch (error) {
          return res.status(500).json("Error del servidor");
        }
      };
    
      //app.delete(deleteUserById)
      deleteMascotaController = async (req,res) => {
        try {
            const usuarioEliminado = await this.userServices.deleteUserServiceById(req.params.id);
    
          if (!usuarioEliminado) {
            return res.status(204).json("No se pudo eliminar el usuario");
          }
    
          return res.status(200).json({ success: true, message: usuarioEliminado });
        } catch (error) {
          return res.status(500).json("Error del servidor");
        } 
      }
}

export default MascotasController