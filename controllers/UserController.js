import UserServices from "../services/UserServices.js";

class UserController {
  userServices = new UserServices();

  getAllUserController = async (req, res) => {
    console.log("get all users")
    try {
      const users = await this.userServices.getAllUserServices();
      if (!users) {
        return res.status(204).json("No hay usuarios en el servidor");
      }
      return res.status(200).json({ success: true, message: users });
    } catch (error) {}
  };

  //app.getID
  getUserControllerById = async (req, res) => {
    try {
      const user = await this.userServices.getUserServiceById(req.params.id);

      if (!user) {
        return res.status(204).send("No existe el usuario en el servidor");
      }
      return res.status(200).json({ success: true, message: user });
    } catch (error) {
      return res.status(500).send("Error del servidor");
    }
  };

  //app.post
  postUserController = async (req, res) => {
    try {
      const usuario = await this.userServices.getUserServiceById(req.params.id)
      if (usuario) {
        return res.status(204).send("El usuario ya existe")
        return;
      }
      const nuevoUser = await this.userServices.postUserService(req.body);

      return res.status(200).json({ success: true, message: nuevoUser });
    } catch (error) {
      return res.status(500).send("Error del servidor");
    }
  };

  //app.put
  putUserController = async (req, res) => {
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
  deleteUserController = async (req,res) => {
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

  //metodo login
  login = async (req, res) => {
    try {
      const { mail, password } = req.body;
      const token = await this.userServices.login({ mail, password });

      /// ¿Cual de los dos res?
      res.cookie("login", token);
      res.status(200).send({success: true, message: "Usuario logueado"});
      ///

    } catch (error) {
      return res.status(400).send({success: false, message: error.message});
    }
  };

  //metodo profile para verificar token
  profile = async (req, res) => {
    try {
      const {login}=req.cookies
      const user=  await this.userServices.profile(login)
      return res.status(200).json({success: true, message: user});
    } catch (error) {
      return res.status(400).json({success: false, message: error.message,});
    }
  };  
}

export default UserController;
