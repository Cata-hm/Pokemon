const { Pokemon, Type } = require("../db");

const createPokemon = async (body) => {
  const { name, life, attack, defense, speed, height, weight, types } = body;
  const newPokemon = await Pokemon.create({
    name: name,
    life: life,
    attack: attack,
    defense: defense,
    speed: speed,
    height: height,
    weight: weight,
  });

  const allTypes = await Type.findOne({ where: { name: types } });
  await newPokemon.addType(allTypes);

  return newPokemon;
};

module.exports = createPokemon;
