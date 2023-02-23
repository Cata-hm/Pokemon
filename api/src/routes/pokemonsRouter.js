const { Router } = require('express');
const { getAllPokemonsAndByName, getPokemonsById,  postCreatePokemon } = require('../Handlers/pokemonsHandler');
const { postValidate } = require('../middlewares/postValidate');

// Import all routers

const pokemonsRouter = Router ();

// Configure the routers

pokemonsRouter.get("/", getAllPokemonsAndByName);
pokemonsRouter.get("/:id", getPokemonsById);
pokemonsRouter.post("/", postValidate, postCreatePokemon);

module.exports = pokemonsRouter;