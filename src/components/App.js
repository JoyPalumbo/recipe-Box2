import React from 'react';
import axios from 'axios';
//  const mysql = require('mysql');
// const mysql = require('mysql');
import logo from '../kawaii-taco.png';
import '../App.css';

import Form from '../components/Form';


class App extends React.Component {

  // recipeData;

  constructor() {
    super();


    // this.handleRecipeChange = this.handleRecipeChange.bind(this);
    // this.submitFormHandler = this.submitFormHandler.bind(this);
    // this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


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



  // //this is not functional yet, needs to be fixed
  componentDidMount() {
    // axios.get('localhost:3000/recipes')
    //   .then(res => {
    //     const recipes = res.data;
    //     console.log(recipes);
    //     this.setState({ recipes });
    //   })
    //DO NOT TOUCH!!!
    axios.get('/recipes')
      .then(res => {
        const recipes = res.data;
        console.log(recipes);
        this.setState({ recipes });
      })
    // this.getRecipes();
  }



  // this.getRecipes();
  // axios.get('/recipes')
  //   .then(res => {
  //     const recipes = res.data;
  //     console.log("this is componentMount", recipes);
  //     this.setState({ recipes });
  //   }).catch(err => console.log('There was an error in componentMount:' + err))


  //experiment
  // getRecipes() {
  //   fetch('http://localhost:3000/api/recipes')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }))
  //     .catch(err => console.log(err))
  // }

  deleteRecipe(index) {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({ recipes });
    console.log('clicked');
  }



  //uncomment this out
  getRecipes = (recipe) => {
    // console.log("testing");
    // console.log("this is da recipe:", recipe);
    //DO NOT TOUCH!!!!!!
    axios.get('localhost:3000/recipes')
      .then((response) => {
        console.log("trying to get recipes:", response);
        const recipes = response.data;
        this.setState({ recipeName: recipes });
        console.log('response from user', response.data);
      })
      .catch((error) => {
        console.log("axios get inside getRecipes", error);
      });



  }


  //this doesn't work
  // getRecipes(recipes) {
  //   axios.get('/')
  //     .then((response) => {
  //       const recipe = response.data;
  //       this.setState({ recipeName: recipe });
  //       console.log('response from front', response);
  //     })
  //     .catch((error) => {
  //       console.log("you suck", error);
  //     });

  // }

  // submitFormHandler = event => {
  //   event.preventDefault();
  //   console.dir(this.refs.name.value); //will give us the name value
  // }


  // handleRecipeChange = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     recipeName: event.target.value
  //   })
  // }

  // handleIngredientChange = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     ingredients: event.target.value
  //   })
  // }

  handleSubmit = (event) => {
    alert("hello")
    // alert(`${this.state.recipeName} ${this.state.ingredients}`)
    event.preventDefault();
    //not sure I can call the below functions here
    // this.updateNewRecipe();
    // this.saveNewRecipe();
    // this.saveNewRecipe(event);

  }


  // //saves a new recipe to recipes
  saveNewRecipe(newRecipe) {
    // localStorage.getItem(newRecipe);
    //this is the original code
    let recipes = this.state.recipes.slice();
    // recipes.push({ newRecipe });
    recipes.push({ recipeName: this.state.recipes.recipeName, ingredients: this.state.recipes.ingredients });
    this.setState({ recipes });
    this.setState({ newRecipe: { recipeName: '', ingredients: [] } });
    console.log('Im a clicky click', recipes)

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
              {/* <button type='edit'>EditRecipe</button> */}
            </li >
          )
          }
        </ul >

        {/* <form onSubmit={this.handleSubmit}></form>
        <form>
          <div>
            <label>Recipe Name</label>
            <input type='text' value={this.state.recipeName} onChange={this.handleRecipeChange} />
            <label>ingredients</label>
            <input type='text' value={this.state.ingredients} onChange={this.handleIngredientChange} />
          </div>
        </form>

        <button type='submit' onClick={(event) => this.saveNewRecipe()}>Add Recipe</button> */}
        <Form />
      </div >
    );
  }
}

export default App;


