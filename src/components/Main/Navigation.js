import React, { useState } from "react";
import "../../Style/Navigation.css";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { toggleDropdown1 } from "../Header/Dropdown.js";
function Navigation() {
  //드롭다운
  const [showDropdown1, setShowDropdown1] = useState(false);

  return (
    <div className="Navigation">
      <div>
        <span
          className="NavbarMenu"
          onClick={() => toggleDropdown1(showDropdown1, setShowDropdown1)}
        >
          <MenuOutlined />
        </span>
        <div className="a">
          {/* 카테고리 */}
          <Link to="/" className="Nav-item">
            <div className="Nav-icon">
              <img src="/img/icons/kor.png" alt="" />
            </div>
            <div>한식</div>
          </Link>
          <Link to="/" className="Nav-item">
            <div className="Nav-icon">
              <img src="/img/icons/us.png" alt="" />
            </div>
            <div>양식</div>
          </Link>
          <Link to="/" className="Nav-item">
            <div className="Nav-icon">
              <img src="/img/icons/jp.png" alt="" />
            </div>
            <div>일식</div>
          </Link>
          <Link to="/" className="Nav-item">
            <div className="Nav-icon">
              <img src="/img/icons/cn.png" alt="" />
            </div>
            <div>중식</div>
          </Link>
        </div>
        {showDropdown1 && (
          <div className="MegaMenu">
            <div className="MegaMenuColumn">
              {/* <Link to="/" className="MenuItem">
                <div>분식</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>돈까스</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>버거</div>
              </Link> */}
              <Link to="/" className="Nav-item">
                <div className="Nav-icon">
                  <img src="/img/icons/a.png" alt="" />
                </div>
                <div>분식</div>
              </Link>
              <Link to="/" className="Nav-item">
                <div className="Nav-icon">
                  <img src="/img/icons/aa.png" alt="" />
                </div>
                <div>돈까스</div>
              </Link>
            </div>

            <div className="MegaMenuColumn">
              {/* <Link to="/" className="MenuItem">
                <div>족발/보쌈</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>구이</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>찜/탕</div>
              </Link> */}
              <Link to="/" className="Nav-item">
                <div className="Nav-icon">
                  <img src="/img/icons/b.png" alt="" />
                </div>
                <div>족발/보쌈</div>
              </Link>
              <Link to="/" className="Nav-item">
                <div className="Nav-icon">
                  <img src="/img/icons/bb.png" alt="" />
                </div>
                <div>찜/탕</div>
              </Link>
            </div>
            <div className="MegaMenuColumn">
              {/* <Link to="/" className="MenuItem">
                <div>회/해물</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>아시안</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>멕시칸</div>
              </Link> */}
              <Link to="/" className="Nav-item">
                <div className="Nav-icon">
                  <img src="/img/icons/c.png" alt="" />
                </div>
                <div>회/해물</div>
              </Link>
              <Link to="/" className="Nav-item">
                <div className="Nav-icon">
                  <img src="/img/icons/cc.png" alt="" />
                </div>
                <div>아시안</div>
              </Link>
            </div>
            <div className="MegaMenuColumn">
              {/* <Link to="/" className="MenuItem">
                <div>샌드위치</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>커피/차</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>디저트</div>
              </Link> */}
              <Link to="/" className="Nav-item">
                <div className="Nav-icon">
                  <img src="/img/icons/d.png" alt="" />
                </div>
                <div>카페</div>
              </Link>
              <Link to="/" className="Nav-item">
                <div className="Nav-icon">
                  <img src="/img/icons/dd.png" alt="" />
                </div>
                <div>샐러드</div>
              </Link>
            </div>
            <div className="MegaMenuColumn">
              {/* <Link to="/" className="MenuItem">
                <div>죽</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>도시락</div>
              </Link>
              <Link to="/" className="MenuItem">
                <div>샐러드</div>
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </div>

    // <div className="navigation">
    //   {/* 한식 */}
    //   <Link to="/" className="nav-item">
    //     <div className="nav-content">
    //       <div className="nav-icon">
    //         <img src="/img/icons/kor.png" alt="" />
    //       </div>
    //       <div className="nav-text">한식</div>
    //     </div>
    //   </Link>
    //   {/* 양식 */}
    //   <Link to="/" className="nav-item">
    //     <div className="nav-content">
    //       <div className="nav-icon">
    //         <img src="/img/icons/us.png" alt="" />
    //       </div>
    //       <div className="nav-text">양식</div>
    //     </div>
    //   </Link>
    //   {/* 일식 */}
    //   <Link to="/" className="nav-item">
    //     <div className="nav-content">
    //       <div className="nav-icon">
    //         <img src="/img/icons/jp.png" alt="" />
    //       </div>
    //       <div className="nav-text">일식</div>
    //     </div>
    //   </Link>
    //   {/* 중식 */}
    //   <Link to="/" className="nav-item">
    //     <div className="nav-content">
    //       <div className="nav-icon">
    //         <img src="/img/icons/cn.png" alt="" />
    //       </div>
    //       <div className="nav-text">중식</div>
    //     </div>
    //   </Link>
    // </div>
  );
}
export default Navigation;
