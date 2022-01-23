import React from "react";
import images from "../../../images";

function MobileMenu() {
  return (
    <div className="mobile_menu">
      <div className="logo">
        <img src={images.logo} alt="brawl bash" className="logo" />
      </div>

      <div className="btn_open">
        <img src="/images/menu.svg" alt="open menu" />
      </div>

      <nav className="closed">
        <div className="btn_close">
          <img src="/images/close.svg" alt="close menu" />
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Roadmap</li>
          <li>Land</li>
          <li>Partners</li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
