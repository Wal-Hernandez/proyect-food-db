require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;


module.exports= async (name) => {

    var response = {};

    try {
        response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        console.log("'AXIOS : Search list received.");
        response = response.data.results;

        if(name){
            response = response.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
        }
    } catch (error) {
        return { msg: 'Error trying to get the data from the API.' };
    }


    return response.map(recipe => {
        return {
            id: 'A' + recipe.id,
            name: recipe.title,
            background_url: recipe.image,
            diets: recipe.diets,
            healthScore: recipe.healthScore
        };
    });
}