import React, { Component } from "react";

import FormComponent from "./FormComponent";

class Form extends Component {
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
    return <FormComponent handleChange={this.handleChange} {...this.state} />;
  }
}

export default Form;
