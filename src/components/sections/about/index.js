import React from "react";
import Articles from "../../molecules/articles";
import Info from "../../molecules/info";

function About() {
  return (
    <section className="about">
      <div className="container">
        <Articles />
        <Info />
      </div>
    </section>
  );
}

export default About;
