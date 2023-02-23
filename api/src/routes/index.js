const { Router } = require('express');

// Import all routers

const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');


const router = Router();

// Configure the routers

router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
