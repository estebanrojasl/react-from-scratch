import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.handleClickDouble = this.handleClickDouble.bind(this);
    this.handleClickHalve = this.handleClickHalve.bind(this);
  }

  handleClickDouble() {
    this.setState((prevState) => {
      return {
        count: prevState.count * 2,
      };
    });
  }

  handleClickHalve() {
    this.setState((prevState) => {
      return {
        count: prevState.count / 2,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClickDouble}>Double</button>
        <button onClick={this.handleClickHalve}>Halve</button>
      </div>
    );
  }
}

export default App;
