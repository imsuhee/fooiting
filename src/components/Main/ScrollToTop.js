// ScrollToTop.js
import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="Scroll-button">
      <ArrowUpOutlined />
    </button>
  );
}
export default ScrollToTop;
