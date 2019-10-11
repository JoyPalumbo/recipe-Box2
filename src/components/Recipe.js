import React from 'react';
const recipes = [
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
// class Recipe extends React.Component {
//   constructor(props) {
//     super(props);
//     //     this.state = {

//   }
// }


// export default Recipe;

const RecipeList = () => (
  <ul>
    {recipes.map((recipe, index) =>
      <li key={recipe.index}>
        <div>
          {recipe.recipeName}
        </div>
        <div>
          <ol>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}> {ingredient}</li>
            ))}
          </ol>
        </div>
      </li>

    )}
  </ul >

)
export default RecipeList