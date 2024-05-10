import React from "react";
import "../Login/LoginStyle.css";
import { GoogleMap } from "./GoogleMap";
import { SearchLocation } from "./SearchLocation";
import { SelectRide } from "./SelectRide";

export const Home = () => {
  return (
    <div>
      <div className="container">
        <SearchLocation />
        <SelectRide />
        <GoogleMap />
      </div>
    </div>
  );
};
