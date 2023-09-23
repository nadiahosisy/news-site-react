import React from "react";
import ArticleCard from "./ArticleCard";
import { ArticleCardLeft } from ".";

function HomeArticles() {
  return (
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Editor Picks</h2>
        <div className="articles-container">
          <ArticleCard
            category="Entertainment"
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus."
            imageSrc="img/articles/ent1.jpg"
          />
          <ArticleCard
            category="Sports"
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus."
            bgColor="dark"
          />
          <ArticleCard
            imageSrc="img/articles/tech1.jpg"
            category="Technology"
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus."
          />
          <ArticleCard
            imageSrc="img/articles/sports1.jpg"
            category="Sports"
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus."
          />
          <ArticleCard
            imageSrc="img/articles/tech2.jpg"
            category="Technology"
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus."
          />
          <ArticleCard
            category="Sports"
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus."
            bgColor="primary"
          />
          <ArticleCardLeft
            imageSrc="img/articles/ent2.jpg"
            category="Entertainment"
            title="Lorem
          ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil
          beatae ea autem. Doloribus."
          />
        </div>
      </div>
    </section>
  );
}

export default HomeArticles;
