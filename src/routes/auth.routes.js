const router = require("express").Router(); // Importamos el router de express
const { createUser, loginUser } = require("../controllers/auth.controllers"); // Importamos el controlador de auth

// Crear una ruta de tipo POST para registrar un usuario en la base de datos
router.post("/register", createUser); // http://localhost:8080/auth/register

// Crear una ruta de tipo POST para iniciar sesión
router.post("/login", loginUser); // http://localhost:8080/auth/login

module.exports = router; // Exportamos el router para poder usarlo en otros archivos
