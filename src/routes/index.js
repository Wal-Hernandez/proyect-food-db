const { Router } = require('express');
// Import all routers;
const Recipes = require('./Recipes.js')
const getDiets = require('./getDiets.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', Recipes);
router.use('/diets', getDiets);
module.exports = router;
