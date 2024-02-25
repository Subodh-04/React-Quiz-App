// MainLogin.js

import React, { useState } from "react";
import img1 from "../img/img3.png";
import { Link } from "react-router-dom";

export default function MainLogin({ onUsernameChange }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUsernameChange(username);
    console.log("Submitted username:", username);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div style={{ fontFamily: "poppins-bold" }}>
      <nav className="navbar">
        <div className="container">
          <p className="navbar-brand fw-bolder text-bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              className="text-body fs-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z"></path>
            </svg>
            QuizKaroo
          </p>
        </div>
      </nav>

      {/* MainLogin Component */}
      <div className="container h-100">
        <div className="row">
          <div className="col-lg-6 h-100">
            <div className="left h-100" style={{ backgroundColor: "#fbfaff" }}>
              <img src={img1} className="img-fluid h-100" alt="" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="right w-75">
              <h2 className="fw-bolder">Welcome to Quizkaroooo</h2>
              <h6 className="text-body-tertiary pb-4 fw-medium">
                Start Playing
              </h6>

              <div className="mb-3">
                <label
                  htmlFor="uNameInput"
                  className="form-label fs-6"
                  style={{ color: "#9e9ea1c3" }}
                >
                  Enter UserName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="uNameInput"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-md rounded-5 ps-4 pe-4 fw-light border-0"
                style={{ backgroundColor: "#464d97" }}
                onClick={handleSubmit}
              >
                <Link className="text-decoration-none" style={{ color: "White" }} to={"/topic-selection"}>Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
