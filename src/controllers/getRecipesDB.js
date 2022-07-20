const {Op} = require('sequelize')
const {Recipe, Diet} = require('../db.js')
module.exports= async (name) => {

  var response = await Recipe.findAll({
    where: name ? {
      name: {
        [Op.iLike]: `%${name}%`
      }
    } : {},
    attributes: ['id', 'name', 'background_url','healthScore'],
    include: 
      {
        model: Diet,
        as: "diets",
        attributes: ['name'],
        through: {attributes: []}
      },
    

  });


  return response.map(recipe => {
    return {...recipe.dataValues, id: 'D' + recipe.dataValues.id, diets: recipe.diets.map(name => name.name)}
  });
}