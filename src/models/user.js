const Sequelize = require('sequelize');
const { Model } = Sequelize;
const { sequelize } = require('../config/sequelize');

class User extends Model {}

// Definimos el modelo
User.init({ // init es un método estático de Model
    id: {
        type: Sequelize.INTEGER, // Indicamos el tipo de dato de la columna
        primaryKey: true, // Indicamos que es una llave primaria
        autoIncrement: true, // Indicamos que es autoincremental
    },
    firstName: {
        type: Sequelize.STRING(50), // Indicamos el tipo de dato de la columna
        allowNull: false, // Indicamos que no puede ser nulo
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true, // Indicamos que es un valor único, que no se puede repetir
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
    },
}, {
    sequelize, // Indicamos la conexión que vamos a utilizar
    modelName: 'user', // Definimos el nombre del modelo
    timestamps: true, // Le decimos que sí cree los campos createdAt y updatedAt
});

module.exports = User; // Exportamos el modelo para poder usarlo en otros archivos

