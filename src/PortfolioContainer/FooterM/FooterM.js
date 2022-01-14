import React, { useEffect } from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from './footerstyle';
import "./FooterM.css";


export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
      <div>
          <Footer/>
    <div className="footer-containers">
      <div className="footer-bottom">
        <p className="footer-text">
          Well, got a project? Would love to collaborate !! <br />
          Reach out to me on social media platforms or drop me an email at
        </p>
       <p className="footer-email">Sudipshaw69@gmail.com</p>
        <p>
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
          <span>
            Made with ❤️ by Sudip Shaw
            <br />
            Copyright © 2021
          </span>
        </p>
      </div>
    </div>
    </div>
  );
}
