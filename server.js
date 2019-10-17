const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// // const mysql = require('mysql');
// const axios = require('axios');
// import saveRecipes from '../../database-mysql/index';
const recipes = require('./database-mysql/index');

//define routes

const app = express();
app.use(express.json({ extended: false }));
app.use('/api/recipes', require('./routes/api/recipes'));

app.get('/', (req, res) => res.send('API RUNNING'));
// app.use('/api/users', require('./routes/api/users'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../react-client/dist')));


// app.get('/api/recipes', function (req, res) {
//   connection.connect(function (err, connection) {
//     connection.query('select * from recipes', function (error, results) {
//       if (error) throw error;
//       res.send(results);
//       console.log('is this thing working?')
//       console.log(results);
//     });
//   });
// });

//express server checks to see if recipes endpoint exists, if it does
//gets data from database 
//getRecipes is a db helper function
//********************* */
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

// recipes.getRecipes();

// app.listen(3000, () => {
//   console.log('listening on port 3000! MOOOOO!');
// });

// "start": "node server/index.js",




// const port = process.env.PORT || 3000;

// console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route


//post request gets recipe from input field from client and saves it to db
app.post('/', (req, res) => {
  console.log('saving recipe', req.body);
  // let recipeName = req.body.title;
  // let ingredients = req.body.ingredients
  let post = { recipes: recipes.recipeName, ingredients: recipes.ingredients };
  // recipes.connection.query('INSERT INTO recipes SET ?', post, (err, recipes) => {
  //   if (err) {
  //     throw err
  //   }
  //   else {
  //     console.log('we saved a recipe');
  //   }
  // })

})

// getNewRecipe(req.body.recipeName, req.body.ingredients)
//   .then((response) => {
//     res.send(response.data);
//     const saveMe = {
//       recipes: [
//         {
//           recipes: response.data[0].title,
//           ingredients: response.data[0].ingredients
//         }
//       ],
//     };

// })
// .catch((error) => {
//   res.sendStatus(500);
//   console.log('error');
// })

// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

app.listen(3000, () => {
  console.log('listening ooooon port 3000!');
});