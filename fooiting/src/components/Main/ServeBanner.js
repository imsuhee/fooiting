import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/constants.js";
import { Carousel } from "antd";
import axios from "axios";
import "../../Style/ServeBanner.css";

function ServeBanner() {
  const [products, setProducts] = React.useState([]); //초기값이 빈 배열([])로 설정, 컴포넌트에서 상품 정보를 담는 배열
  React.useEffect(function () {
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

  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <div className="product-slider">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <Link
              style={{ color: "inherit" }}
              className="product-link"
              to={`/products/${product.id}`}
            >
              <div>
                <img
                  className="product-img"
                  alt=""
                  src={`${API_URL}/${product.imageUrl}`}
                />
              </div>
              <div className="product-contents">
                <span className="product-name">{product.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Carousel>
  );
}

export default ServeBanner;
