
const express = require('express');
const router = express.Router();
const path = require('path');
// const App = require('../../src/components/App');
const recipes = require('../../database-mysql/index');
// router.use(express.static(path.join(__dirname, '../../src/styles/')))
// router.use(express.static(path.join(__dirname, '')))


//@route GET api/recipes
//@desc test route
// router.get('/', (req, res) => res.send('recipe route'));
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
router.get('/', (req, res) => {
  recipes.getRecipes((err, data) => {
    if (err) {
      console.log('Error getting recipes', err);
      res.sendStatus(500);
    } else {
      console.log('recipes from db:', data);
      res.json(data);
    }
  });
});

//route to post to api
//route POST api/recipes
router.post('/', (req, res) => {
  console.log(req.body);
  const { recipeName, ingredients } = req.body;
  try {
    res.send('recipe route');
  } catch (err) {
    console.log("router post not working", err);
    res.status(500).send('server error');
  }
})


// export default router;
module.exports = router;