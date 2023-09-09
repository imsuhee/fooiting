import React from "react";
import ScrollToTop from "../../components/Main/ScrollToTop.js";
import Banner from "../../components/Main/Banner.js";
import Navigation from "../../components/Main/navigation.js";
import "../../Style/Main.css";
function Main() {
  return (
    //30초 마다 베너 움직임
    <div>
      <Banner />
      <Navigation />
      <ScrollToTop />
    </div>
  );
}

export default Main;
