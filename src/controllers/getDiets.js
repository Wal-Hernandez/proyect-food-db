const { Recipe, Diet } = require("../db");

module.exports= async () => {

const types = [
    "gluten free",
    "dairy free",
    "ketogenic",
    "vegetarian",
    "lacto vegetarian",
    "lacto ovo vegetarian",
    "ovo vegetarian",
    "vegan",
    "pescatarian",
    "paleolithic",
    "primal",
    "fodmap friendly",
    "whole 30",
  ];

  try { 
      const created = types.map( async diet => {
        return await Diet.findOrCreate({
             where:{name : diet},
         });
       })
     
       if(created){
        return await Diet.findAll();
            }
       
  } catch (error) {
      console.log(error)
  }
}



