const mysql = require('mysql');
const recipes = require('../server');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'recipes',
});


//saves recipe to db
const saveRecipes = (data) => {
  let post = { title: data.recipeName, ingredients: data.ingredients };
  let recipes = data.title;
  let ingredients = data.ingredients;

  // connection.query('INSERT INTO recipes SET ?', post, (err, recipes) => {
  connection.query('INSERT INTO recipes SET ?', post, (err, res) => {

    if (err) {
      throw err
    }
    else {
      console.log('we saved a recipe');
    }
  });
};

//********** */
//this is
const getRecipes = (callback) => {
  connection.query('select * from recipes', (err, recipes) => {
    if (err) {
      callback(err);
    } else {
      callback(null, recipes);
    }
  });
};




// // module.exports.getTopData = getTopData;
module.exports.saveRecipes = saveRecipes;
module.exports.getRecipes = getRecipes;
// module.exports.all = all;

// 


