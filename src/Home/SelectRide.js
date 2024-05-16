import React from "react";
import "../Login/LoginStyle.css";

export const SelectRide = () => {
  return (
    <div style={{ display: "flex" }}>
      <div class="form-check">
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
