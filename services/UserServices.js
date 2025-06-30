import {User } from "../models/index.js";
import { validarUserById } from "../middlewares/validarUserById.js";

class UserServices {
  getAllUserServices = async () => {
    const usuarios = await User.findAll();
    return usuarios;
  };

  getUserServiceById = async (id) => {
    const usuario = await User.findByPk(id);
    validarUserById;
    return usuario;
  };

  postUserService = async (data) => {
    existeUsuario;
    const { id, name, mail, number, password } = await User.create(data);
    return { id, name, mail, number, password };

    // Hacer login
  };

  putUserServiceById = async (data,id) => {
    const { name, mail, number, password } = data.body;
    const usuario = await User.findByPk(id);
    validarUserById;
    usuario.name = name;
    usuario.mail = mail;
    usuario.number = number;
    usuario.password = password;

    await usuario.save();

    return { name, mail, number, password };
  };

  deleteUserServiceById = async (id) => {
    const usuario = await User.findByPk(id);
    usuario.destroy();

    return usuario;
  };
}

export default UserServices;
