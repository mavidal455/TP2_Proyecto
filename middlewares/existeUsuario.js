const existeUsuario = async (data) => {
  const usuario = await User.findByPk(data.body.id);
  if (usuario) {
    res.status(404).send("El usuario ya se encuentra en la base de datos");
    return;
  }

  next()
};
