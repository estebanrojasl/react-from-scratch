import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoading: false,
    };
    this.fetchComponent = this.fetchComponent.bind(this);
  }

  async fetchComponent() {
    this.setState({ isLoading: true });
    const data = await fetch("https://swapi.dev/api/vehicles/4");
    this.setState({ data: await data.json(), isLoading: false });
  }

  componentDidMount() {
    this.fetchComponent();
  }

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   fetch("https://swapi.dev/api/people/1")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ data: data, isLoading: false }));
  // }

  render() {
    return <p>{this.state.isLoading ? "Loading" : this.state.data.name}</p>;
  }
}
export default App;
