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
      </div>
    </section>
  );
}

export default Banner;
