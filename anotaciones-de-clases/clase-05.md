# Creación de un modelo de dato con Sequelize

## Objetivos de la clase

- Crear un modelo de dato con Sequelize

En la carpeta models se encuentran los modelos de datos que vamos a utilizar en nuestra aplicación. En este caso, vamos a crear un modelo de datos para los usuarios de nuestra aplicación.

Para crear un modelo de datos, debemos crear un archivo en la carpeta models con el nombre del modelo en singular y con la extensión .js. En este caso, el archivo se llamará user.js.

En el archivo user.js, debemos importar el módulo sequelize y la clase Model de sequelize. Además, debemos importar la conexión a la base de datos que creamos en el archivo index.js.

```js
const Sequelize = require("sequelize");
const { Model } = Sequelize;
const { sequelize } = require("../config/sequelize");

class User extends Model {}

// Definimos el modelo
User.init(
  {
    // init es un método estático de Model
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
  },
  {
    sequelize, // Indicamos la conexión que vamos a utilizar
    modelName: "user", // Definimos el nombre del modelo
    timestamps: true, // Le decimos que sí cree los campos createdAt y updatedAt
  }
);

module.exports = User; // Exportamos el modelo para poder usarlo en otros archivos
```


