import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeName: '',
      ingredients: []
    }
  }

  handleRecipeChange = (event) => {
    this.setState({
      recipeName: event.target.value
    })
  }

  handleIngredientChange = (event) => {
    this.setState({
      ingredients: event.target.value
    })
  }

  handleSubmit = (event) => {
    // alert("hello")
    alert(`${this.state.recipeName} ${this.state.ingredients}`)
    // event.preventDefault()
  }

  //update newest recipe
  updateNewRecipe(recipeName, ingredients) {
    this.setState({ newestRecipe: { recipeName: recipeName, ingredients: ingredients } })
  }
  //saves a new recipe to recipes
  saveNewRecipe(newRecipe) {
    let recipes = this.state.recipes.slice();
    recipes.push({ newRecipe });
    this.setState({ recipes });
    this.setState({ newRecipe: { recipeName: '', ingredients: [] } });

  }
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
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Recipe Name</label>
          <input type='text' value={this.state.recipeName} onChange={this.handleRecipeChange} />
          <label>ingredients</label>
          <input type='text' value={this.state.ingredients} onChange={this.handleIngredientChange} />
        </div>
        <button type="submit"> Submit</button>
      </form>
    )
  }

}

export default Form;