import React from 'react';
import logo from '../kawaii-taco.png';
import '../App.css';

class App extends React.component {
  constructor() {
    super();
    this.state = {
      //hard coded example to be changed later
      recipes: [
        {
          title: 'Bagel',
          ingredients: [
            '1 Bagel',
            'Cream cheese'
          ],
          steps: [
            'Slice bagel in half',
            'Spread on cream cheese',
            'Enjoy!'
          ],
          id: 'bagel'
        },
        {
          title: 'Pizza',
          ingredients: [
            '1 Pizza Crust',
            '1 Jar of Pizza Sauce',
            '3 oz Part-Skim Mozerella Cheese'
          ],
          steps: [
            'Put sauce on crust',
            'Sprinkle mozarella cheese over sauce',
            'Bake at 350 degrees for 20 minutes'
          ],
          id: 'pizza'
        },
      ],
      selectedRecipe: null
    }
  }
}

return (
  <div className="App" >
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Kawaii Recipe Box</h1>
    </header>
  </div>
);
}

export default App;
