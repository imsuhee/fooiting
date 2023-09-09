import React from "react";
import ScrollToTop from "../../components/Main/ScrollToTop.js";
import Banner from "../../components/Main/MainBanner.js";
import Navigation from "../../components/Main/navigation.js";
import ServeBanner from "../../components/Main/ServeBanner.js";
import "../../Style/Main.css";
function Main() {
  return (
    //30초 마다 베너 움직임
    <div>
      <Banner />
      <Navigation />
      <ServeBanner />
      <ScrollToTop />
    </div>
  );
}

export default Main;
