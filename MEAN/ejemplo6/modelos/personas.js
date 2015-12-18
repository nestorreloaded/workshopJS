/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero_documento: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false
    },
    certificado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
};
