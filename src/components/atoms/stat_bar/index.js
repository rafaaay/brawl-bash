import React from "react";

function StatBar() {
  return (
    <li className="stat_bar">
      <div className="stat_bar__title">
        <h3>Lorem Ipsum</h3>
      </div>
      <div className="progress_bar">
        <span style={{ width: "60%" }}></span>
      </div>
    </li>
  );
}

export default StatBar;
