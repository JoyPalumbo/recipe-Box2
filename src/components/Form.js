import React from 'react';

class Form extends React.Component {
  // constructor() {
  //   this.state = {
  //     email: ''
  //   }
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
    return (
      <form>
        <div>
          <label>Recipe Name</label>
          <input type='text' />
        </div>
      </form>
    )
  }

}

export default Form;