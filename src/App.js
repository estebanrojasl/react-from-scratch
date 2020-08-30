import React, { Component } from "react";
import Info from "./components/Info";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return <div>{this.state.isLoading ? <h2>Loading...</h2> : <Info />}</div>;
  }
}

export default App;
