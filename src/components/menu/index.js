import React from "react";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>About</span>
        </li>
        <li>
          <span>Roadmap</span>
        </li>
        <li className="active">
          <span>Land</span>
        </li>
        <li>
          <span>Partners</span>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
