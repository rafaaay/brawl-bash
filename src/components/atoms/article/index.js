import React from "react";
import images from "../../../images";

function Article() {
  return (
    <article className="article">
      <div className="article__container">
        <h2 className="article__heading">Lorem Ipsum</h2>
        <div className="article__image">
          <img src={images.infinity} alt="infinity" />
        </div>
        <p className="article__text">
          Placeholder text holder goes here. Adding this line just to stretch
          the text xd.
        </p>
      </div>
    </article>
  );
}

export default Article;
