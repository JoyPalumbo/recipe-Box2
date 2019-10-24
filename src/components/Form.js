import React from 'react';
import App from './App';
import axios from 'axios';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeName: '',
      ingredients: []
    }
    this.handleRecipeChange = this.handleRecipeChange.bind(this);
    this.handleIngredientsChange = this.handleRecipeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRecipeChange = (event) => {
    // event.preventDefault();
    console.log("im handle recipeChande:", event.target.value);
    this.setState({
      recipeName: event.target.value
    })
  }

  handleIngredientChange = (event) => {
    // event.preventDefault();
    console.log(event.target.value)
    this.setState({
      ingredients: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    // const data = new FormData(event.target);
    const { recipeName } = this.state;
    const { ingredients } = this.state;
    console.log("I am recipename:", { recipeName });
    //****this part is what is causing the error*** the recipe and ingredietns
    axios.post('/api/recipes', { recipeName, ingredients })
      .then((response) => {
        // response.sendStatus('recipe have been saved to database');
        // const recipe = response.data.title;
        // const ingredients = response.data.ingredients;

        // this.setState({
        //   recipeName: recipe,
        //   ingredients: ingredients
        // });

        // this.setState({
        //   title: data.title,
        //   ingredients: data.ingredients
        // });

        // console.log('response from front', response.data);

        //this is console.logging the res.send in router.post in recipes.js
        // console.log(response);
        // console.log(data);
        console.log('handleSubmit:', response);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  // handleSubmit = (event) => {
  //   // alert("hello")
  //   // alert(`${this.state.recipeName} ${this.state.ingredients}`)
  //   // event.preventDefault()
  //   // this.updateNewRecipe();
  //   event.preventDefault();
  //   console.log('recipe was entered', event)
  //   // saveRecipes(event);
  //   //not sure I can call the below functions here
  //   // this.updateNewRecipe();
  //   axios.post('/api/recipes', event)
  //     .then((response) => {
  //       response.send('recipe have been saved to database');
  //       const recipe = response.data.title;
  //       const ingredients = response.data.ingredients;

  //       this.setState({
  //         recipeName: recipe,
  //         ingredients: ingredients
  //       });
  //       // console.log('response from front', response.data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // handleClick() {
  //   //  const { onSearch } = this.props;
  //   const { recipeName } = this.state;
  //   const { ingredients } = this.state;

  //   //  onSearch(recipe);
  // }

  //update newest recipe
  // updateNewRecipe(recipeName, ingredients) {
  //   this.setState({ newestRecipe: { recipeName: recipeName, ingredients: ingredients } })
  // }

  //saves a new recipe to recipes
  // saveNewRecipe(newRecipe) {
  //   let recipes = this.state.recipes.slice();
  //   recipes.push({ newRecipe });
  //   this.setState({ recipes });
  //   this.setState({ newRecipe: { recipeName: '', ingredients: [] } });

  // }
  // changeHandler = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   this.setState({
  //     formControls: {
  //       [name]: value
  //     }
  //   });
  // }

  render() {
    const { recipeName } = this.state;
    const { ingredients } = this.state;
    return (
      <div>
        <p>recipe is: {recipeName} and {ingredients} </p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Recipe Name</label>
            {/* <input type='text' id="recipeName" name="recipeName" />
          <label>ingredients</label>
          <input type='text' id="ingredients" name="ingredients" />
        </div>
        <button type="button"> Submit</button> */}

            <input type='text' name={recipeName} onChange={this.handleRecipeChange} />
            <label>ingredients</label>
            <input type='text' name={ingredients} onChange={this.handleIngredientChange} />
          </div>
          <button onClick={this.handleSubmit} > Submit</button>
        </form>
      </div>
    )
  }

}

// Form.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };


export default Form;