import React from "react";

// components
import images from "../../images";
import Menu from "../menu";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <Menu />

        <img src={images.logo} alt="logo" className="banner__logo" />

        <div className="banner__cta">
          <div className="banner__cta__container">
            <h2 className="banner__cta__heading">Farmer</h2>
            <div className="banner__cta__body">
              <div className="image">
                <img src={images.discord} alt="logo" />
              </div>
              <p>Join our discord now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
