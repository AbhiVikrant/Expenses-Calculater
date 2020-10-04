import React, { Component } from "react";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header fixed-top" dark={true}>
          <h1>MY Expenses</h1>
        </Header>{" "}
      </div>
    );
  }
}
export default App;
