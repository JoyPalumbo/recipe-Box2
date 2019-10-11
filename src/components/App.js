import React from 'react';
import logo from '../kawaii-taco.png';
import '../App.css';
import RecipeList from './Recipe';
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
  // constructor() {
  //   super();

  state = {
    recipes: [
      {
        recipeName: 'pizza',
        ingredients: ['cheese', 'tomato sauce', 'dough']
      },
      {
        recipeName: 'pizza2',
        ingredients: ['cheese', 'tomato sauce', 'dough']
      },
      {
        recipeName: 'pizza3',
        ingredients: ['cheese', 'tomato sauce', 'dough']
      }
    ]
  }
  // }

  deletRecipe(index) {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({ recipes });
    console.log('clicked');
  }
  //make an add button
  //input field
  render() {
    const { recipes } = this.state;
    return (
      <div className="App" >
        {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kawaii Recipe Box</h1>
        {/* <RecipeList /> */}

        <ul>
          {recipes.map((recipe, index) =>
            <li key={recipe.index}>
              <div>
                {recipe.recipeName}
              </div>
              <div>
                <ol>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}> {ingredient}
                    </li>
                  ))}
                </ol>
              </div>
              <button type='submit'>Add Recipe</button>
              <button type='delete' onClick={(event) => this.deleteRecipe()}>Delete Recipe</button>
              <button type='edit'>EditRecipe</button>
            </li>
          )}
        </ul >

        {/* <button type='submit'>Add Recipe</button>
        <button type='delete' onClick={(event) => this.deleteRecipe()}>Delete Recipe</button>
        <button type='edit'>EditRecipe</button> */}
      </div>
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

