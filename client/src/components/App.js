import React, { Component } from "react";
import Card from "./bootstrap/Card";
import ContainerRow from "./ContainerRaw";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header fixed-top" dark={true}>
          <h1>MY Expenses</h1>
        </Header>
        <div
          className=" col-sm-20 col-md-10  leftspan text-right border-right text-white "
          id="one"
        >
          <h2>Total</h2>
        </div>
        <hr />
        <ContainerRow fluid={true} className="my-3">
          <Card />
        </ContainerRow>
      </div>
    );
  }
}
export default App;
