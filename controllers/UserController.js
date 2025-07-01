import UserServices from "../services/UserServices.js";

class UserController {
  userServices = new UserServices();

  getAllUserController = async (req, res) => {
          console.log("get all users")
    try {

      const users = this.userServices.getAllUserServices();
      if (!users) {
        res.status(204).send("No hay usuarios en el servidor");
      }
      res.status(200).send({ success: true, message: users });
    } catch (error) {}
  };
  //app.getID
  getUserControllerById = async (req, res) => {
    try {
      const user = this.userServices.getUserServiceById(req.params.id);

      if (!user) {
        res.status(204).send("No existe el usuario en el servidor");
      }
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(500).send("Error del servidor");
    }
  };


  //app.post
  postUserController = async (req, res) => {
    try {
      console.log(req.params)
      console.log('body: ',req.body)
      const nuevoUser = await this.userServices.postUserService(req.body);
      if (!nuevoUser) {
        res.status(204).send("No se pudo agregar el usuario");
      }
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(500).send("Error del servidor");
    }
  };

  putUserController = async (req, res) => {
    try {
      const usuario = this.userServices.putUserServiceById(req.params,req.params.id);

      if (!usuario) {
        res.status(204).send("No se pudo modificar el usuario");
      }

      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(500).send("Error del servidor");
    }
  };
  //app.delete(deleteUserById)

  deleteUserController = async (req,res) => {
    try {
        const usuarioEliminado = this.userServices.deleteUserServiceById(req.params.id);

      if (usuarioEliminado) {
        res.status(204).send("No se pudo eliminar el usuario");
      }

      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(500).send("Error del servidor");
    }
        
    
  }
}

export default UserController;
