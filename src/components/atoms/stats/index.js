import React from "react";
import images from "../../../images";
import StatBar from "../stat_bar";

function Stats() {
  return (
    <div className="stats">
      <div className="stats__header">
        <div className="logo">
          <img src={images.logo_2} alt="logo" />
        </div>
      </div>

      <div className="section__content">
        <ul className="stats__list">
          <StatBar />
          <StatBar />
          <StatBar />
          <StatBar />
          <StatBar />
        </ul>
      </div>
    </div>
  );
}

export default Stats;
