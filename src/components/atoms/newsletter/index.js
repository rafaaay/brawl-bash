import React from "react";
import images from "../../../images";

function JoinNewsletter() {
  return (
    <div className="footer__block newsletter">
      <div className="footer__block__container">
        <h2 className="footer__block__heading">Subscribe to our Newsletter</h2>

        <div className="input">
          <input type={"text"} placeholder="Enter your email"></input>
          <span className="mail_icon">
            <img src={images.mail} alt="mail" />
          </span>
        </div>
        <div className="button">
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default JoinNewsletter;
