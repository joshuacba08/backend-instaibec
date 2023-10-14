const Sequelize = require("sequelize"); // Importamos la librería de Sequelize
const { Model } = Sequelize; // Importamos el objeto Model de Sequelize
const { sequelize } = require("../config/sequelize"); // Importamos la conexión a la base de datos

class Post extends Model {}

Post.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    type: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      forengKey: true,
    },
  },
  {
    sequelize,
    modelName: "post",
    timestamps: true,
  }
);

module.exports = Post;