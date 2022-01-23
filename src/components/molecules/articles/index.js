import React from "react";
import Article from "../../atoms/article";

function Articles() {
  return (
    <section className="articles section">
      <div className="container">
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
}

export default Articles;
