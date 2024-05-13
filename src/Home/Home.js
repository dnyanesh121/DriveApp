import React from "react";
import "../Login/LoginStyle.css";
import { SearchLocation } from "./SearchLocation";
import { SelectRide } from "./SelectRide";
import { Rides } from "./Rides";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div>
      {/* <div className="form-main-frame">
        <Header />
      </div> */}
      <div className="form-main-frame">
        <SearchLocation />
        <SelectRide />
        <Rides />
      </div>
    </div>
  );
};
