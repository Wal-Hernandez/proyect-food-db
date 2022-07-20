const {Router} = require('express');

const control = require('../controllers');

const router = Router();




router.get('/', async(req,res) => {
    const {name} = req.query
    const result = await control.getRecipes(name);
    let code = result.msg ? 400 : 200;
    res.status(code).send(result)
})

router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const ids = await control.getAllIds(id);
      if (ids) {
        return res.send(ids);
      } else {
        return res.status(404).json({ msg: "ID Not Found" });
      }
    } catch (error) {
      console.log(error);
    }
  });


router.post('/' ,async (req, res) => {
    const response = await control.createRecipe(req.body);
    let code = response.id ? 200 : 400;
    res.status(code).send(response) })


module.exports = router;