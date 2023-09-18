import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/constants.js";
import { Carousel } from "antd";
import axios from "axios";
import "../../Style/ServeBanner.css";

function ServeBanner() {
  //const [banners, setBanners] = useState([]); //초기값이 빈 배열([])로 설정, 컴포넌트에서 상품 정보를 담는 배열
  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/banners`)
  //     .then((result) => {
  //       const banners = result.data.banners;
  //       setBanners(banners);
  //     })
  //     .catch((error) => {
  //       console.error("에러발생 : ", error);
  //     });
  // }, []);

  const [products, setProducts] = useState([]);

  useEffect(function () {
    // 즉시 실행합수
    axios //상품 정보를 받아오는 로직(상품 정보를 가져오는 API 호출 (axios를 사용하여 비동기로 데이터를 가져옴.)
      .get(`${API_URL}/products`)
      .then(function (result) {
        console.log(
          `result.data.products : ${JSON.stringify(result.data, null, 2)}`
        );
        const products = result.data.products;
        setProducts(products); // 가져온 상품 정보를 상태로 업데이트합니다.
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 5,
  };

  return (
    <div className="main">
      <h1 className="review-headlien">리뷰 BEST</h1>
      <div className="map">
        <Link className="region" to={"/"}>
          서울
        </Link>
        <Link className="region" to={"/"}>
          인천
        </Link>
        <Link className="region" to={"/"}>
          대구/경기
        </Link>
        <Link className="region" to={"/"}>
          충북/대전
        </Link>
        <Link className="region" to={"/"}>
          부산/경산
        </Link>
        <Link className="region" to={"/"}>
          광주/전라
        </Link>
        <Link className="region" to={"/"}>
          강원/제주
        </Link>
      </div>
      <Carousel {...settings}>
        {products.map(function (product, index) {
          return (
            <div key={index} className="product-card">
              {/* 각 상품에 대한 링크를 생성합니다. */}
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img
                    alt=""
                    className="product-img"
                    src={`${API_URL}/${product.imageUrl}`} /*서버에 있는 이미지를 가져온다*/
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  {/*가게 이름*/}
                  <span className="product-price">[위치]</span>
                  {/*가격 추후 위치 + 상품내용*/}
                  <div className="product-footer">
                    <div className="product-seller">
                      <span>예약</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
      <h1 className="reservation-headlien">예약순위</h1>
      <div className="product-container">
        {products.map(function (product, index) {
          return (
            <div className="product-card-infor">
              {/* 각 상품에 대한 링크를 생성합니다. */}
              <Link
                style={{ color: "inherit" }}
                className="product-link"
                to={`/products/${product.id}`}
              >
                <div className="ranking">순위</div>
                <div>
                  <img
                    className="product-img-infor"
                    src={`${API_URL}/${product.imageUrl}`} /*서버에 있는 이미지를 가져온다*/
                    alt=""
                  />
                </div>
                <div className="product-contents">
                  {/*추후 음식점 이름 + [위치] 내용*/}
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">[위치] : 상세내용</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServeBanner;
