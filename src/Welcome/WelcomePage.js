import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePageStyle.css";
import "../Login/LoginStyle.css";
import carLogo from "../assets/images/car.png";
import DriverWithUS from "../assets/images/DriverWithUs.svg";
import RideWithUS from "../assets/images/RideWithUS.svg";

export const WelcomePage = () => {
  return (
    <div>
      <div className="container">
        <p className="logo">
          <Link to="">Logo</Link>
        </p>
        <div className="form-main">
          <p className="back-btn">
            <Link to="">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
              Back
            </Link>
          </p>
          <p className="login-account">Select Your Profile</p>
          <p className="profile-details">
            Logged in user can view full business profile and can <br />
            save contact details
          </p>
          <div className="btn-section">
            <Link to="">
              <img src={DriverWithUS} alt="DriverWithUs" />
            </Link>
            <Link to="">
              <img src={RideWithUS} alt="RideWithUs" />
            </Link>
          </div>
        </div>
        <img className="car" src={carLogo} alt="car" />
      </div>
    </div>
  );
};
