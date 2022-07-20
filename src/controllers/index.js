//import the API & DB functions
const getRecipesApi = require('./getRecipesApi.js')
const getRecipesDB = require('./getRecipesDB.js')
const createRecipe = require('./createRecipe.js')
const getDiets = require('./getDiets.js')
const getRecipeDetailApi = require('./getRecipeDetailApi')
const getRecipeDetailDB = require('./getRecipeDetailDB')
//import the DB models 

const { Recipe, Diet } = require('../db.js');

//requeriments



//exports  created functions and new functions joined

module.exports = {
    getRecipesApi,
    getDiets,
    getRecipesDB,
    createRecipe,
    getRecipes: async function(name){
        let resultsAPI = await this.getRecipesApi(name); 
        let resultsDB = await this.getRecipesDB(name);
        
        let results = resultsDB.concat(resultsAPI);

 
       
        return results.length ? results : {msg:'No recipes x.x'};
    },
    getAllIds: async (id) => {
        
        try {
          if (id[0] === 'D') {
            const db = await getRecipeDetailDB(id.slice(1));
            return db;
          }
          const api = await getRecipeDetailApi(id.slice(1));
          return api;
        } catch (error) {
        
        }
      }
}