const createPokemon = require("../Controllers.js/createPokemon");
const { getAllPokemons } = require("../Controllers.js/getAllPokemons");

//__________FUNCTION TO BRING ALL THE POKEMONS AND BY QUERY (GET: /pokemons Y GET : /pokemons/name?="...")__________

const getAllPokemonsAndByName = async (req, res, next) => {
  try {
    const name = req.query.name;
    const pokemonsTotal = await getAllPokemons();
    if (name) {
      const pokemonName = pokemonsTotal.filter((element) =>
        element.name.toLowerCase().includes(name.toLowerCase())
      );
      pokemonName.length
        ? res.status(200).send(pokemonName)
        : res.status(200).send("Pokemon name does not exist");
    } else {
      res.status(200).send(pokemonsTotal);
    }
  } catch (error) {
    res.status(400).json(error);
    next(error);
  }
};

//__________FUNCTION TO SEARCH BY ID (GET /pokemons/{id}:)__________________________________________________________

const getPokemonsById = async (req, res) => {
  try {
    const id = req.params.id;
    const pokemonsTotal = await getAllPokemons();
    const pokemon = pokemonsTotal.find((element) => element.id == id);
    if (pokemon) {
      res.status(200).send(pokemon);
    } else {
      res.status(404).send({ error: "Pokemon not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//__________FUNCTION TO CREATE NEW POKEMONS (POST /pokemons)_______________________________________________________

const postCreatePokemon = async (req, res) => {
  try {
    const newPokemon = await createPokemon(req.body);
    res.status(201).send(newPokemon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Pokemon not created" });
  }
};

//____________________________________________________________________________________________________________________

module.exports = {
  getAllPokemonsAndByName,
  getPokemonsById,
  postCreatePokemon,
};
