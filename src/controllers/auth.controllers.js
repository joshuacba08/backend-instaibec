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
  console.log("body: ", req.body);

  const user = await container.readFile();

  if (user.email !== req.body.email) {
    return res.status(404).json({
      ok: false,
      msg: "Email incorrecto",
    });
  }

  // status for credentials incorrect or correct

  if (user.password !== req.body.password) {
    return res.status(401).json({
      ok: false,
      msg: "Password incorrecto",
    });
  }

  return res.json({
    ok: true,
    msg: "Se ha logueado correctamente",
  });
};

module.exports = {
  createUser,
  loginUser,
};
