import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Shared = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Shared;
