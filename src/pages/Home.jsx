import React from "react";
import Navbar from "../components/Navbar";
import HomeArticles from "../components/HomeArticles";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import { Shared } from "../components";

const Home = () => {
  return (
    <div className="home-page">
      <Showcase />
      <HomeArticles />
    </div>
  );
};

export default Home;
