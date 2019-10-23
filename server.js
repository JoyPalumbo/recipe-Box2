const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// // const mysql = require('mysql');
// const axios = require('axios');
// import saveRecipes from '../../database-mysql/index';
const recipes = require('./database-mysql/index');

//define routes

const app = express();
//do not touch
app.use('/', express.static('build'));
// app.use(express.static('build'));
// app.use('/', express.static(path.join(__dirname, 'build')))


app.use(express.json({ extended: false }));
// app.use('/api/recipes', require('./routes/api/recipes'));

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// app.get('/', (req, res) => res.send('API RUNNING'));

// app.use('/api/users', require('./routes/api/users'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../react-client/dist')));




//express server checks to see if recipes endpoint exists, if it does
//gets data from database 
//getRecipes is a db helper function
//********************* */
//uncomment
//pretty sure this is correct, works in postman...
app.get('/recipes', (req, res) => {
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

//post request gets recipe from input field from client and saves it to db
// app.post('/', (req, res) => {
//   console.log('saving recipe', req.body);
//   // let recipeName = req.body.title;
//   // let ingredients = req.body.ingredients
//   let post = { recipes: recipes.recipeName, ingredients: recipes.ingredients };


// })


app.listen(3000, () => {
  console.log('listening ooooon port 3000!');
});