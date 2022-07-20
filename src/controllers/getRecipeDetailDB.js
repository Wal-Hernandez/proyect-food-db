const { Recipe, Diet } = require("../db");
  module.exports = async (id) => {
    try {
        const idDb = await Recipe.findByPk(id, {
          include: {
            model: Diet,
            as:'diets',
            attributes: ["name"],
            through: { attributes: [] },
          },
        });
        return {
          id: 'D' + id,
          background_url: idDb.background_url,
          name: idDb.name,
          summary: idDb.summary,
          healthScore: idDb.healthScore,
          steps: idDb.steps,
          createdByUser: idDb.createdByUser,
          diet: idDb.diets.map((d) => d.name),
        };
      } catch (error) {
        console.log(error);
      }
    
       
};
