import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/sudip-shaw" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/sudip-007" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://twitter.com/SudipShaw19" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.instagram.com/sudipshaw_29/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sudip</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer ",
                    1000,
                    "FrontEnd Developer ",
                    1000,
                    // "Mern stack Dev ",
                    // 1000,
                    "React Developer",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            I aspire to work with the cutting edge technologies <br/>and solve challenging real life problems through technology.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="ResumeSudip.pdf" download="ResumeSudip.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
