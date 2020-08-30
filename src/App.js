import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLogged: !prevState.isLogged,
      };
    });
  }

  render() {
    return this.state.isLogged ? (
      <div>
        <h2>Logged in</h2>
        <button onClick={this.handleClick}>Log out</button>
      </div>
    ) : (
      <div>
        <h2>Logged out</h2>
        <button onClick={this.handleClick}>Log in</button>
      </div>
    );
  }
}

export default App;
