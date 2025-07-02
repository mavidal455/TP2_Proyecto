import { User } from "../models/index.js";
import { generateToken, verifyToken } from "../utils/jwt.js"; // ✅ Agregar este import

class UserServices {
  getAllUserServices = async () => {
    const usuarios = await User.findAll();
    return usuarios;
  };

  getUserServiceById = async (id) => {
    const usuario = await User.findByPk(id);
    return usuario;
  };

  postUserService = async (data) => {
    const user = await User.create(data);
    console.log(user)
    return user;
  };

  // Hacer login
  login = async (data) => {
    const { mail, password } = data;
    const user = await User.findOne({
      where: { mail },
    });
    if (!user) throw new Error("User not found");
    const comparePass = await user.compare(password);
    if (!comparePass) throw new Error("User not found");

    const payload = {
      id: user.id,
      name: user.name,
    };

    const token= generateToken(payload)
    return token;
  };

  profile=async (token) => {
    const user= verifyToken(token)
    return user
  }




  //put servicio
  putUserServiceById = async (data,id) => {
    const usuario = await User.findByPk(id);
    if (!usuario) {
      return null;
    }    
    const usuarioModificado = await usuario.update(data)
    return usuarioModificado;
  };

  deleteUserServiceById = async (id) => {
    const usuario = await User.findByPk(id);
    if (!usuario) {
      return null;
    }
    await usuario.destroy();
    return usuario;
  };

}
export default UserServices;
