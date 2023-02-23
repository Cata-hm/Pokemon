const createPokemon = require('../Controllers.js/createPokemon');
const { getAllPokemons } = require('../Controllers.js/getAllPokemons');

//__________FUNCTION TO BRING ALL THE POKEMONS AND BY QUERY (GET: /pokemons Y GET : /pokemons/name?="...")__________

const getAllPokemonsAndByName = async (req, res, next) => {
    try {
        const name = req.query.name;
        const pokemonsTotal = await getAllPokemons();
        if(name){
            const pokemonName = await pokemonsTotal.filter( element => element.name.toLowerCase().includes(name.toLowerCase()))
            pokemonName.length ? res.status(200).send( pokemonName ) : res.status(200).send( "Pokemon name does not exist" );
        } else {
            res.status(200).json(pokemonsTotal)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
        next(error)
    }
};

//__________FUNCTION TO SEARCH BY ID (GET /pokemons/{id}:)__________________________________________________________

const getPokemonsById = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemonsTotal = await getAllPokemons();
        const pokemon = pokemonsTotal.find(element => element.id == id);
        if (pokemon) {
          res.status(200).json(pokemon);
        } else {
          res.status(404).json({ error: "Pokemon not found" });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

//__________FUNCTION TO CREATE NEW POKEMONS (POST /pokemons)_______________________________________________________


const postCreatePokemon = async (req, res) => {
    try {
      const newPokemon = await createPokemon(req.body);
      res.status(201).json(newPokemon);
    } catch (error) {
      res.status(500).json({ error: "Pokemon not created" });
    }
};

//____________________________________________________________________________________________________________________

module.exports = {
    getAllPokemonsAndByName,
    getPokemonsById,
    postCreatePokemon,
};