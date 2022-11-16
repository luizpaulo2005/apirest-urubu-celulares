'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  produto.init({
    nome: DataTypes.STRING,
    preco: DataTypes.DOUBLE,
    descricao: DataTypes.STRING,
    url_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'produto',
  });
  return produto;
};