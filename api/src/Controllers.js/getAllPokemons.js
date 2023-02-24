const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getAllPokemons = async () => {
  const pokemonApi = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
  );

  const pokemonApiUrl = pokemonApi.data.results.map((element) =>
    axios.get(element.url)
  );

  const pokemonData = await Promise.all(pokemonApiUrl);

  const PokemonDataMap = pokemonData.map((poke) => {
    const pokemon = poke.data;

    const object = {
      id: pokemon.id.toString(),
      name: pokemon.forms[0].name.toLowerCase(),
      life: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
      height: pokemon.height,
      weight: pokemon.weight,
      image: pokemon.sprites.other["dream_world"].front_default,
      image2: pokemon.sprites.other["official-artwork"].front_default,
      image3: pokemon.sprites.other["home"].front_default,
      Types: pokemon.types.map((element) => {
        return { name: element.type.name };
      }),
      create: false,
    };
    return object;
  });

  const pokeDB = await Pokemon.findAll({ include: Type });

  const dataFromDB = pokeDB?.map((element) => {
    return {
      id: element.dataValues.id,
      name:
        element.dataValues.name.trim().toLowerCase().charAt(0).toUpperCase() +
        element.dataValues.name.substring(1), //me traigo el name con el fin de que quede asi = EJEMPLO: "cata" -> "Cata"
      life: element.dataValues.life,
      attack: element.dataValues.attack,
      defense: element.dataValues.defense,
      speed: element.dataValues.speed,
      height: element.dataValues.height,
      weight: element.dataValues.weight,
      types: element.dataValues.types.map((index) => {
        return { name: index.name };
      }),
      image: element.dataValues.image,
      create: true,
    };
  });

  //__________________CONCATENATE apiData WITH dataFromDB______________________________

  return [...PokemonDataMap,...dataFromDB];

};

module.exports = { getAllPokemons };
