const express = require("express");
const Container = require("./services/container");
const { connectToDB } = require("./config/sequelize");
const { User } = require("./models/db");

connectToDB(); // Conectamos a la base de datos
const container = new Container();

const app = express();

// Para leer los datos del body de la petición haremos la siguiente configuración
app.use(express.json());

// Crear una ruta de tipo POST para registrar un usuario en el archivo users.json
// http://localhost:8080/auth/register

app.post("/auth/register", async (req, res) => {
  try {

    const newUser = await User.create(req.body);
    console.log(newUser);

    return res.status(201).json({
      ok: true,
      msg: "Usuario creado correctamente",
      data: newUser,
    })
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error al crear el usuario",
      data: null,
    });
  }
});

app.post("/auth/login", async (req, res) => {
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
}); // http://localhost:8080/auth/login

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
