import React from "react";
import { Route } from "react-router-dom";
import "./WelcomePageStyle.css";
import { Login } from "../Login/login";
import { WelcomePage } from "../Welcome/WelcomePage";

export const Navbar = () => {
  return (
    <div>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/Login" element={<Login />} />
    </div>
  );
};
