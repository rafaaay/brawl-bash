import React from "react";
import "./styles/style.scss";

// components
import About from "./components/sections/about";
import Banner from "./components/sections/banner";
import Rewards from "./components/sections/rewards";

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Rewards />
    </div>
  );
}

export default App;
