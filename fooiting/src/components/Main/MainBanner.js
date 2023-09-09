import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/constants.js";
import { Carousel } from "antd";
import axios from "axios";
import "../../Style/Main.css";

function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.error("에러발생 : ", error);
      });
  }, []);

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {banners.map((banner, index) => {
          return (
            //서버에서 베너 이미지를 가져오겠다.
            <Link to={banner.href}>
              <div id="banner">
                {/* API_URL을 사용하여 서버로부터 베너 이미지의 경로를 설정합니다. */}
                <img src={`${API_URL}/${banner.imageUrl}`} alt="" />
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Banner;
