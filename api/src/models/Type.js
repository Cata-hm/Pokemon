const { DataTypes } = require('sequelize');
// We export a function that defines the model
// Then we inject the connection to sequelize.
module.exports = (sequelize) => {
  // define the model
  sequelize.define('type', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {timestamps:false});
};