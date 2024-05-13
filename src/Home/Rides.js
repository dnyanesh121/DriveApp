import React from "react";
import "../Login/LoginStyle.css";
import { ListOfRide } from "./ListOfRide";
import { GoogleMap } from "./GoogleMap";

export const Rides = () => {
  return (
    <div style={{ display: "flex" }}>
      <ListOfRide />
      <GoogleMap />
    </div>
  );
};
