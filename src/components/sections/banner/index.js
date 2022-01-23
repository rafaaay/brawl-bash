import React from "react";

// components
import images from "../../../images";
import Menu from "../../atoms/menu";
import MobileMenu from "../../atoms/mobile_menu";

function Banner() {
  return (
    <section className="banner section">
      <Menu />
      <MobileMenu />
      <img src={images.logo} alt="logo" className="banner__logo" />
    </section>
  );
}

export default Banner;
