import React from "react";
import "../Login/LoginStyle.css";
import { GoogleMap } from "./GoogleMap";
import { SearchLocation } from "./SearchLocation";

export const SelectRide = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div class="form-check" style={{ marginRight: "1.5rem" }}>
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Need car with driver
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Need driver only
        </label>
      </div>
    </div>
  );
};
