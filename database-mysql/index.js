const mysql = require('mysql');
const recipes = require('../server');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'recipes',
});

//this is for the table
// const recipe = 'SELECT * FROM recipes';

// connection.connect(err => {
//   if (err) {
//     console.log("broken!");
//     return err;
//   }
//   console.log("connected! Woot");
// })

// connection.connect(err => {
//   if (err) throw err;
//   connection.query("SELECT * from recipes", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   })
// })

// app.get('/recipes', (req, res) => {
//   connection.connect();
//   connection.query('SELECT * from recipes', function (err, rows, fields) {
//     if (!err) {
//       res.send(JSON.stringify(rows));
//     } else {
//       console.log('Error while performing Query.');
//     }
//   });
//   connection.end();
// });

// connection.query('SELECT * from recipes', function (err, rows, fields) {
//   if (!err) {
//     res.send(JSON.stringify(rows));
//     console.log(rows);
//   } else {
//     console.log('Error while performing Query.');
//   }


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

// export const all = async () => {
//   return new Promise((resolve, reject) => {
//     connection.query('SELECT * from recipes', (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     })
//   })
// }



// connection.query(
//   'select * from recipes',
//   function (err) {
//     if (err) {
//       throw err;
//       // console.log(recipes);
//     }
//   }
// )


//********** */
const getRecipes = (callback) => {
  connection.query('select * from recipes', (err, recipes) => {
    if (err) {
      callback(err);
    } else {
      callback(null, recipes);
    }
  });
};


// const saveData = (data) => {
//   let post = { recipeName: data.recipeName, ingredients: data.ingredients };
//   connection.query('INSERT INTO recipes SET ?', post, (err, recipe) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Let's eat");
//     }
//   });
// };


// // module.exports.getTopData = getTopData;
// module.exports.saveData = saveData;
module.exports.getRecipes = getRecipes;
// module.exports.all = all;

// 


