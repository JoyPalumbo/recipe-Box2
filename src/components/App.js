import React from 'react';
import axios from 'axios';
//  const mysql = require('mysql');
// const mysql = require('mysql');
import logo from '../kawaii-taco.png';
import '../App.css';

//move this to index.js under database folder later when components are moved

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'simple-react-sql-db'
// });

// connection.connect(err => {
//   if (err) {
//     return err;
//   }
// })

//need to fix this...not the correct path
// require('../../database-mysql/route')(app, connection);

// const db = require('../database-mysql');
// import RecipeList from './Recipe';
// import Modal from "react-modal";
// import Form from './Form';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Accordion from 'react-bootstrap/Accordion';
// import { Panel } from 'react-bootstrap/lib/Panel';

// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import Modal from 'react-bootstrap/Modal';
// import FormGroup from 'react-bootstrap/FormGroup';
// import ControlLabel from 'react-bootstrap/ControlLabel';
// import FormControl from 'react-bootstrap/FormControl';
// import PropTypes from 'prop-types';

class App extends React.Component {

  // recipeData;

  constructor() {
    super();


    //   this.handleRecipeChange = this.handleRecipeChange.bind(this);
    //   this.submitFormHandler = this.submitFormHandler.bind(this);
    //   this.handleIngredientChange = this.handleIngredientChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      // recipes: []
      recipes: [
        {
          recipes: '',
          ingredients: []
        }
      ],
    }
  }
  //     // recipes: [
  //     //   {
  //     //     recipeName: 'pizza',
  //     //     ingredients: ['cheese', 'tomato sauce', 'dough']
  //     //   },
  //     //   {
  //     //     recipeName: 'pizza2',
  //     //     ingredients: ['cheese', 'tomato sauce', 'dough']
  //     //   },
  //     //   {
  //     //     recipeName: 'pizza3',
  //     //     ingredients: ['cheese', 'tomato sauce', 'dough']
  //     //   }
  //     // ],
  //     newestRecipe: { recipeName: "", ingredients: [] }
  //   }


  // //this is not functional yet, needs to be fixed
  componentDidMount() {
    axios.get('/recipes')
      .then(res => {
        const recipes = res.data;
        console.log(recipes);
        this.setState({ recipes });
      })
    // fetch('/recipes')
    //     console.log(response))
    //   .then(data => this.setState({ recipes: data }));
  }
  //   this.recipeData = JSON.parse(localStorage.getItem('recipe'));

  //   if (localStorage.getItem('recipe')) {
  //     this.setState({
  //       recipeName: this.recipeData.recipeName,
  //       ingredients: this.recipeData.ingredients
  //     })
  //   }
  //   else {
  //     this.setState({
  //       recipeName: '',
  //       ingredients: []
  //     })
  //   }


  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem('recipe', JSON.stringify(nextState));
  // }

  deleteRecipe(index) {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({ recipes });
    console.log('clicked');
  }

  getRecipes = (recipe) => {
    // console.log("testing");
    // console.log("this is da recipe:", recipe);
    axios.get('/recipes')
      .then((response) => {
        console.log("trying to get recipes:", response);
        const recipes = response.data;
        this.setState({ recipeName: recipes });
        console.log('response from user', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // submitFormHandler = event => {
  //   event.preventDefault();
  //   console.dir(this.refs.name.value); //will give us the name value
  // }


  // handleRecipeChange = (event) => {
  //   this.setState({
  //     recipeName: event.target.value
  //   })
  // }

  // handleIngredientChange = (event) => {
  //   this.setState({
  //     ingredients: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   // alert("hello")
  //   alert(`${this.state.recipeName} ${this.state.ingredients}`)
  //   event.preventDefault();
  //   //not sure I can call the below functions here
  //   // this.updateNewRecipe();
  //   // this.saveNewRecipe();

  // }

  // //update newest recipe
  // updateNewRecipe(recipeName, ingredients) {
  //   this.setState({
  //     newestRecipe: { recipeName: recipeName, ingredients: ingredients }
  //     //not sure which is correct
  //     //this.setState({ newRecipe: { recipeName: recipes.recipeName, ingredients: recipes.ingredients } });
  //   })
  // }
  // //saves a new recipe to recipes
  saveNewRecipe(newRecipe) {
    // localStorage.getItem(newRecipe);
    let recipes = this.state.recipes.slice();
    // recipes.push({ newRecipe });
    recipes.push({ recipeName: this.state.recipes.recipeName, ingredients: this.state.recipes.ingredients });
    this.setState({ recipes });
    this.setState({ newRecipe: { recipeName: '', ingredients: [] } });
    console.log('Im a clicky click')

  }

  render() {
    const { recipes } = this.state;

    //   console.log(newRecipe);
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Kawaii Recipe Box</h1>
        </header>


        {/* <RecipeList /> */}
        <ul>
          {recipes.map((recipe, index) =>
            <li key={index}>

              <div><h2>Recipe</h2>
                {recipe.title}
              </div>
              <div>
                <ol>
                  <h3>Ingredients</h3>
                  {/* {recipes.map((ingredient) => ( */}

                  <li key={recipe.ingredients}> {recipe.ingredients}
                  </li>
                  {/* ))} */}
                </ol>
              </div>
              <button type='delete' onClick={(event) => this.deleteRecipe(index)}>Delete Recipe</button>
              <button type='edit'>EditRecipe</button>
            </li >
          )
          }
        </ul >
        {/* <form onSubmit={this.submitFormHandler}>
          <div>
            <input type="text" name="name" ref="name" />
          </div>
        </form> */}
        {/* <Form /> */}
        <form onSubmit={this.handleSubmit}></form>
        <form>
          <div>
            <label>Recipe Name</label>
            <input type='text' value={this.state.recipeName} onChange={this.handleRecipeChange} />
            <label>ingredients</label>
            <input type='text' value={this.state.ingredients} onChange={this.handleIngredientChange} />
          </div>
          {/* <button type="submit" onClick={(event) => this.saveNewRecipe(newRecipe)}> Submit</button>
          onchange={(event) => this.updateNewRecipe(event.target.value, event.target.value.split(","))} */}
        </form>

        <button type='submit' onClick={(event) => this.saveNewRecipe()}>Add Recipe</button>
        {/* <button type='delete' onClick={(event) => this.deleteRecipe()}>Delete Recipe</button> */}
        {/* <button type='edit'>EditRecipe</button> */}
      </div >

    );
  }
}





export default App;

// class App extends React.component {
  // constructor() {
  //   super();
    // this.state = {
    //   //hard coded example to be changed later
    //   recipes: [
    //     {
    //       title: 'Bagel',
    //       ingredients: [
    //         '1 Bagel',
    //         'Cream cheese'
    //       ],
    //       steps: [
    //         'Slice bagel in half',
    //         'Spread on cream cheese',
    //         'Enjoy!'
    //       ],
    //       id: 'bagel'
    //     },
    //     {
    //       title: 'Pizza',
    //       ingredients: [
    //         '1 Pizza Crust',
    //         '1 Jar of Pizza Sauce',
    //         '3 oz Part-Skim Mozerella Cheese'
    //       ],
    //       steps: [
    //         'Put sauce on crust',
    //         'Sprinkle mozarella cheese over sauce',
    //         'Bake at 350 degrees for 20 minutes'
    //       ],
    //       id: 'pizza'
    //     },
    //   ],
    //   selectedRecipe: null
    // }
  // };

