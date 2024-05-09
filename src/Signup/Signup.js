import React from "react";
import { Link } from "react-router-dom";
import "../Login/LoginStyle.css";
import carLogo from "../assets/images/car.png";

export const Signup = () => {
  return (
    <div>
      <div className="container">
        <p className="logo">
          <Link to="">Logo</Link>
        </p>
        <div className="form-main">
          <p className="back-btn">
            <Link to="/welcomePage">
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
          <p className="login-account">Sign up to your account</p>
          <form>
            <div className="input-main input-main-space">
              <input type="email" placeholder="Email" />
              <svg
                className="email-svg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
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
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    fill="#a9a9a9"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="input-main input-main-space">
              <input type="text" placeholder="First Name" />
              <svg
                className="email-svg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
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
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    fill="#a9a9a9"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="input-main input-main-space">
              <input type="text" placeholder="Last Name" />
              <svg
                className="email-svg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
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
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    fill="#a9a9a9"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="input-main">
              <input type="password" placeholder="Password" />
              <svg
                className="email-svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                    stroke="#a9a9a9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <svg
                className="eye-svg"
                width="24px"
                height="24px"
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
                    d="M15.5778 13.6334C16.2396 12.1831 15.9738 10.4133 14.7803 9.21976C13.5868 8.02628 11.817 7.76042 10.3667 8.4222L11.5537 9.60918C12.315 9.46778 13.1307 9.69153 13.7196 10.2804C14.3085 10.8693 14.5323 11.6851 14.3909 12.4464L15.5778 13.6334Z"
                    fill="#a9a9a9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.86339 7.80781C5.60443 8.02054 5.35893 8.23562 5.12798 8.44832C4.28009 9.22922 3.59623 10.0078 3.1244 10.5906C2.88801 10.8825 2.70365 11.1268 2.57733 11.2997C2.51414 11.3862 2.46539 11.4549 2.43184 11.5029C2.41506 11.5269 2.40207 11.5457 2.39297 11.559L2.38224 11.5747L2.37908 11.5794L2.37806 11.5809L2.09656 12L2.37741 12.4181L2.37806 12.4191L2.37908 12.4206L2.38224 12.4253L2.39297 12.441C2.40207 12.4543 2.41506 12.4731 2.43184 12.4971C2.46539 12.5451 2.51414 12.6138 2.57733 12.7003C2.70365 12.8732 2.88801 13.1175 3.1244 13.4094C3.59623 13.9922 4.28009 14.7708 5.12798 15.5517C6.79696 17.0888 9.22583 18.75 12 18.75C13.3694 18.75 14.6547 18.3452 15.806 17.7504L14.6832 16.6277C13.8289 17.0123 12.9256 17.25 12 17.25C9.80366 17.25 7.73254 15.9112 6.14416 14.4483C5.36337 13.7292 4.72921 13.0078 4.29019 12.4656C4.14681 12.2885 4.02475 12.1311 3.92572 12C4.02475 11.8689 4.14681 11.7115 4.29019 11.5344C4.72921 10.9922 5.36337 10.2708 6.14416 9.55168C6.39447 9.32114 6.65677 9.09369 6.92965 8.87408L5.86339 7.80781ZM17.0705 15.1258C17.3434 14.9063 17.6056 14.6788 17.8559 14.4483C18.6367 13.7292 19.2708 13.0078 19.7099 12.4656C19.8532 12.2885 19.9753 12.1311 20.0743 12C19.9753 11.8689 19.8532 11.7115 19.7099 11.5344C19.2708 10.9922 18.6367 10.2708 17.8559 9.55168C16.2675 8.08879 14.1964 6.75 12 6.75C11.0745 6.75 10.1712 6.98772 9.31694 7.37228L8.1942 6.24954C9.34544 5.65475 10.6307 5.25 12 5.25C14.7742 5.25 17.2031 6.91121 18.8721 8.44832C19.72 9.22922 20.4038 10.0078 20.8757 10.5906C21.112 10.8825 21.2964 11.1268 21.4227 11.2997C21.4859 11.3862 21.5347 11.4549 21.5682 11.5029C21.585 11.5269 21.598 11.5457 21.6071 11.559L21.6178 11.5747L21.621 11.5794L21.622 11.5809L21.9035 12L21.6224 12.4186L21.621 12.4206L21.6178 12.4253L21.6071 12.441C21.598 12.4543 21.585 12.4731 21.5682 12.4971C21.5347 12.5451 21.4859 12.6138 21.4227 12.7003C21.2964 12.8732 21.112 13.1175 20.8757 13.4094C20.4038 13.9922 19.72 14.7708 18.8721 15.5517C18.6412 15.7644 18.3957 15.9794 18.1368 16.1921L17.0705 15.1258Z"
                    fill="#a9a9a9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.75 19.8107L3.75 4.81066L4.81066 3.75L19.8107 18.75L18.75 19.8107Z"
                    fill="#a9a9a9"
                  ></path>
                </g>
              </svg>
            </div>
            <button className="continue-btn">
              Continue
              <svg
                className="btn-arrow"
                width="24px"
                height="24px"
                viewBox="0 -6.5 38 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="ui-gambling-website-lined-icnos-casinoshunter"
                      transform="translate(-1511.000000, -158.000000)"
                      fill="#1C1C1F"
                      fill-rule="nonzero"
                    >
                      <g id="1" transform="translate(1350.000000, 120.000000)">
                        <path
                          d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                          id="right-arrow"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </form>
        </div>
        <img className="car" src={carLogo} alt="car" />
      </div>
    </div>
  );
};
