const { Pokemon, Type } = require("../db");

const createPokemon = async (body) => {
  const { name, life, attack, defense, speed, height, weight, Types } = body;
  const newPokemon = await Pokemon.create({
    name: name,
    life: life,
    attack: attack,
    defense: defense,
    speed: speed,
    height: height,
    weight: weight,
  });

  const allTypes = await Type.findOne({ where: { name: Types } });
  await newPokemon.addType(allTypes);

  return newPokemon;
};

module.exports = createPokemon;
