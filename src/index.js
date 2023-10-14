const express = require("express");
const Container = require("./services/container");
const { connectToDB } = require("./config/sequelize");

const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");

connectToDB(); // Conectamos a la base de datos
const container = new Container();

const app = express();

// Para leer los datos del body de la petición haremos la siguiente configuración
app.use(express.json());

// configuramos el grupo de rutas /auth
app.use("/auth", authRoutes);
// configuramos el grupo de rutas /post
app.use("/post", postRoutes)

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
