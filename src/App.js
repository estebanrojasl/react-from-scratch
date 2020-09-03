import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      restrictions: {
        isVegan: false,
        isVegetarian: false,
        isKosher: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            restrictions: {
              ...prevState.restrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            placeholder="First Name"
            onChange={this.handleChange}
            name="firstName"
          />
          <br />
          <input
            placeholder="Last Name"
            onChange={this.handleChange}
            name="lastName"
          />
          <br />
          <input placeholder="Age" onChange={this.handleChange} name="age" />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
            />
            Female
          </label>
          <label>
            <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />
          <select
            value={this.state.destination}
            onChange={this.handleChange}
            name="destination"
          >
            <option value="Iceland">Iceland</option>
            <option value="Holland">Holland</option>
            <option value="Australia">Australia</option>
          </select>
          <br />
          <input
            type="checkbox"
            name="isKosher"
            checked={this.state.restrictions.isKosher}
            onChange={this.handleChange}
          />
          Kosher
          <br />
          <input
            type="checkbox"
            name="isVegetarian"
            checked={this.state.restrictions.isVegetarian}
            onChange={this.handleChange}
          />
          Vegetarian
          <br />
          <input
            type="checkbox"
            name="isVegan"
            checked={this.state.restrictions.isVegan}
            onChange={this.handleChange}
          />
          Vegan
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <div>
          {
            <p>
              Your dietary restrictions:
              {this.state.restrictions.isKosher ? "Kosher" : null}{" "}
              {this.state.restrictions.isVegetarian ? "Vegetarian" : null}{" "}
              {this.state.restrictions.isVegan ? "Vegan" : null}
            </p>
          }
        </div>
      </main>
    );
  }
}

export default App;
