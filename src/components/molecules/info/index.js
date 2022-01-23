import React from "react";
import Stats from "../../atoms/stats";
import Tokenmics from "../../atoms/tokenmics";

function Info() {
  return (
    <section className="info section">
      <div className="container">
        <Tokenmics />
        <Stats />
      </div>
    </section>
  );
}

export default Info;
