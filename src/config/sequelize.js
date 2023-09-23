const Sequelize = require("sequelize");

const sequelize = new Sequelize("instaibec", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión establecida exitosamente");
  })
  .catch((err) => console.log(err));

module.exports = sequelize;
