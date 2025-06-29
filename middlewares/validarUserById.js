

const validarUserById = (req,res,next) =>{
    const {id} = req.body

    if(!id){
        res.status(404).send("El usuario no se encuentra registrado en la base de datos")
        return
    }

    next()
    
}


export {validarUserById}