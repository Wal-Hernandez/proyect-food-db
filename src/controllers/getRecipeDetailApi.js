
require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
module.exports = async (id) => {
  console.log(id)
    try {
        const api = await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
          );
          console.log(api.data)
          const detail = api.data;
          console.log(detail)
          return {
            id: 'A' + id,
            background_url: detail.image,
            name: detail.title,
            diet: detail.diets,
            summary:detail.summary,
            score: detail.spoonacularScore,
            healthScore: detail.healthScore,
            steps: detail.instructions
          };
    }
     catch (error) {
        console.log(error)
    }
       
};
