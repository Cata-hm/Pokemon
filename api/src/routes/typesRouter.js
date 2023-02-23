const { Router } = require('express');
const getTypes = require('../Handlers/typesHandler');

// Import all routers

const typesRouter = Router ();

// Configure the routers

typesRouter.get("/", getTypes);

module.exports = typesRouter;