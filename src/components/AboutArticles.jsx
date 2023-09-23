import React from "react";
import AboutParag from "./AboutParag";

const AboutArticles = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="page-container">
          <AboutParag />
          <aside className="card bg-primary">
            <h2>Join Our Club</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              id?
            </p>
            <a href="#" className="btn btn-dark btn-block">
              Join Now
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutArticles;
