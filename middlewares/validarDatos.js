export const validarDatos = (req, res, next) => {
  const { name, mail, password } = req.body;
  
  if (!name || !mail || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Faltan campos requeridos' 
    });
  }
  next();
};