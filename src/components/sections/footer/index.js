import React from "react";
import images from "../../../images";
import JoinDiscord from "../../atoms/discord";
import JoinNewsletter from "../../atoms/newsletter";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={images.logo} alt="logo" className="footer__logo" />

        <div className="blocks">
          <JoinDiscord />
          <JoinNewsletter />
        </div>

        <div className="footer__nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Land</a>
            </li>
            <li>
              <a href="#">HPL</a>
            </li>
            <li>
              <a href="#">Press Kit</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
