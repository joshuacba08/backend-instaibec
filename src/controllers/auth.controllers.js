const { response } = require("express");
const bcrypt = require("bcryptjs");
const { User } = require("../models/db"); // Importamos el modelo User

const createUser = async (req, res) => {
  try {
    // Encriptamos la contraseña
    const salt = bcrypt.genSaltSync(10); // Generamos el salt
    // Nota: salt es un valor aleatorio que se agrega a la contraseña para que el hash sea más seguro
    req.body.password = bcrypt.hashSync(req.body.password, salt); // Encriptamos la contraseña

    const newUser = await User.create(req.body); // Creamos el usuario en la base de datos
    console.log(newUser);

    // Antes de devolver los datos del usuario, eliminamos el campo password
    newUser.password = undefined;

    return res.status(201).json({
      // 201 para indicar que se ha creado correctamente
      ok: true,
      msg: "Usuario creado correctamente",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error al crear el usuario",
      data: null,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    // 1. Buscamos el usuario en la base de datos
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // Si no existe el usuario
    if(!user){
        return res.status(400).json({
            ok: false,
            msg: 'El usuario no existe',
            data: null
        });
    }

    // 2. Comparamos la contraseña
    const validPassword = bcrypt.compareSync(req.body.password, user.password); // Comparamos la contraseña

    // Si la contraseña no es válida
    if(!validPassword){
        return res.status(400).json({
            ok: false,
            msg: 'Contraseña incorrecta',
            data: null
        });
    }

    // 3. Generamos el token  TODO: Generar el token

    // 4. Devolvemos los datos del usuario
    user.password = undefined; // Eliminamos el campo password

    return res.status(200).json({
        ok: true,
        msg: 'Inicio de sesión correcto',
        data: user
    });


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: null,
    });
  }
};

module.exports = { // exportamos las funciones controladoras para poder usarlas en otros archivos
  createUser,
  loginUser,
};
