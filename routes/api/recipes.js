
const express = require('express');
const router = express.Router();
// const App = require('../../src/components/App');


//@route GET api/recipes
//@desc test route
// router.get('/', (req, res) => res.send('recipe route'));


//route to post to api
//route POST api/recipes
router.post('/', (req, res) => {
  console.log(req.body);
  const { recipeName, ingredients } = req.body;
  // connection.query('INSERT INTO recipes SET ?', post, (err, recipes) => {
  //   if (err) {
  //     throw err
  //   }
  //   else {
  //     console.log('we saved a recipe');
  //   }
  // })
  try {
    res.send('recipe route');

  } catch (err) {
    console.log(err);
    res.status(500).send('server error');
  }
  // const newRecipe = {
  //   recipeName: "",
  //   ingredients: []
  // }

})
// router.get('/api/recipes', async (req, res) => {
//   try {
//     let recipes = await DB.index.all();
//     res.json(recipes);
//   } catch (e) {
//     console.log(e);
//     res.sendstatus(500);
//   }
// })

// export default router;
module.exports = router;