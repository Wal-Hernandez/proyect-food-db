const {Router} = require('express');

const control = require('../controllers');

const router = Router();




router.get('/', async(req,res) => {
    const result = await control.getDiets();
    res.status(200).send(result)
})


module.exports = router;