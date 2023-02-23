const { DataTypes } = require('sequelize');
// We export a function that defines the model
// Then we inject the connection to sequelize.
module.exports = (sequelize) => {
  // define the model
  sequelize.define('pokemon', {
    //The database model should have the following entities:
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life: {
      type: DataTypes.STRING,
      allowNull: false
    },

    attack: {
      type: DataTypes.STRING,
      allowNull: false
    },

    defense: {
      type: DataTypes.STRING,
      allowNull: false
    },

    speed: {
      type: DataTypes.STRING,
      allowNull: false
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALZAMcm83-Bnh0bpq3uQK7RuqpmpZ3G96HiSsZA8&s"
    },

    createdInDb: {
      type: DataTypes.BOOLEAN, // Llama los datos que están en forma de BOOLEAN.
      allowNull: false, // No permite que esté vacío (ya que es obligatoria).
      defaultValue: true,
    },
  });
};
