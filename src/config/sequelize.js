const Sequelize = require("sequelize");

const sequelize = new Sequelize("instaibec", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Función para conectar a la base de datos
const connectToDB = async () => { // asyn para que sea una función asíncrona
  try{
     await sequelize.authenticate(); // await para esperar a que se conecte a la base de datos
     await sequelize.sync({ force: false }); // force: true para que se sincronice con la base de datos y cree las tablas
     console.log('Conectado a la base de datos correctamente');
    
  }catch(err){
    console.error(err);
  }
}


module.exports = {
  connectToDB,
  sequelize
}; // Exportamos la función para conectar a la base de datos
