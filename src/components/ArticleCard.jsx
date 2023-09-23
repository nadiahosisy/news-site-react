import React from "react";

function ArticleCard({ imageSrc, category, title, content, bgColor }) {
  return (
    <article className={`card ${bgColor ? `bg-${bgColor}` : ""}`}>
      {imageSrc && <img src={imageSrc} alt="" />}
      <div>
        {category && (
          <div className={`category category-${category.toLowerCase()}`}>
            {category}
          </div>
        )}
        <h3>
          <a href="">{title}</a>
        </h3>
        <p>{content}</p>
      </div>
    </article>
  );
}

export default ArticleCard;
