import React, { Component } from "react";
import { Login } from "./Login/login";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Login />
        </div>
      </BrowserRouter>
    );
  }
}
