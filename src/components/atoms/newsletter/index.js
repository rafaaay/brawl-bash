import React from "react";
import images from "../../../images";

function JoinNewsletter() {
  return (
    <div className="footer__block">
      <div className="footer__block__container">
        <h2 className="footer__block__heading">Farmer</h2>
        <div className="footer__block__body">
          <div className="image">
            <img src={images.discord} alt="logo" />
          </div>
          <p>Join our discord now</p>
        </div>
      </div>
    </div>
  );
}

export default JoinNewsletter;
