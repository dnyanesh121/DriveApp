import React, { Component } from "react";
// import { Login } from "./Login/login";
// import { WelcomePage } from "./Welcome/WelcomePage";
import { BrowserRouter } from "react-router-dom";
// import { Signup } from "./Signup/Signup";
// import { AccountInfo } from "./Account/AccountInfo";
// import { AccountUpdateInfo } from "./Account/AccountUpdateInfo";
import { Home } from "./Home/Home";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}
