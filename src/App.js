import React from "react";
import "./styles/style.scss";

// components
import About from "./components/sections/about";
import Banner from "./components/sections/banner";
import Rewards from "./components/sections/rewards";
import Advisors from "./components/sections/advisors";
import Footer from "./components/sections/footer";

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Rewards />
      <Advisors />
      <Footer />
    </div>
  );
}

export default App;
