const { Recipe, Diet } = require("../db");

module.exports = async ({
    name, background_url, summary, healthScore, steps, diets, 
}) => {
    try {
        if (name && summary) {

            const [submitted,created] = await Recipe.findOrCreate({
                where:{name},
                defaults:{ 
                    summary,
                    healthScore: healthScore || null,
                    steps: steps|| null ,
                    background_url: background_url || null,
                }
            });

            let msg= '';

            if(created){
                submitted.addDiets(diets);  
                msg = 'Recipe submitted successfully'
            } else{
                msg = 'Recipe already exists'
            }
         
          
           return {
               id: 'D' + submitted.id, 
               created,
               msg
           }

        } 
        else{
            return {msg: 'control you forms!'}
        }
    } catch (error) {
        console.log(error)
    }
       
};
