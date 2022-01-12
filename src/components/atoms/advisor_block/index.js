import React from "react";
import images from "../../../images";

function AdvisorBlock() {
  return (
    <div className="advisor_block">
      <div className="image">
        <img src={images.advisor} alt="advisor name" />
      </div>
      <div className="text">
        <p>
          Some text goes here, adding these lines because lorem ipsum ain't
          working!
        </p>
      </div>
    </div>
  );
}

export default AdvisorBlock;
