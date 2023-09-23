import React from "react";
import FooterFirst from "./FooterFirst";
import FooterSecond from "./FooterSecond";
import FooterThird from "./FooterThird";
import FooterFour from "./FooterFour";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <FooterFirst />
        <FooterSecond />
        <FooterThird />
        <FooterFour />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
