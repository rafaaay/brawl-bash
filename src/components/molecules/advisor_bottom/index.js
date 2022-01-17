import React from "react";
import images from "../../../images";

function AdvisorBottom() {
  return (
    <div className="section_container bottom">
      <div className="advisors__heading">
        <h2>Advisors</h2>
      </div>
      <div className="content">
        <div className="partner">
          <img src={images.advisor} alt="advisor name" />
        </div>
        <div className="partner">
          <img src={images.advisor} alt="advisor name" />
        </div>
        <div className="partner">
          <img src={images.advisor} alt="advisor name" />
        </div>
        <div className="partner">
          <img src={images.advisor} alt="advisor name" />
        </div>
        <div className="partner">
          <img src={images.advisor} alt="advisor name" />
        </div>
      </div>
    </div>
  );
}

export default AdvisorBottom;
