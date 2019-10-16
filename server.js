const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// // const mysql = require('mysql');
// const axios = require('axios');

// //this recipes is the table
//THIS BREAKS THE CODE CAN"T RUN SERVER
const recipes = require('./database-mysql/index');



const app = express();

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
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(3000, () => {
  console.log('listening ooooon port 3000!');
});