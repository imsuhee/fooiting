import React, { useState } from "react";
import "../../Style/Header.css";
import { Link } from "react-router-dom";
import { Search } from "./Search.js";
import { SearchOutlined } from "@ant-design/icons";
import {
  toggleDropdown1,
  toggleDropdown2,
  toggleDropdown3,
} from "./Dropdown.js";
function Header() {
  //   const [scrolled, setScrolled] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 50) {
  //         setScrolled(true); // 스크롤이 일정 이상 내려갔을 때
  //       } else {
  //         setScrolled(false); // 스크롤이 위로 올라갔을 때
  //       }
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //검색창
  const { query, handleInputChange, handleSearch } = Search();

  //드롭다운
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  return (
    //<div className={scrolled ? "scrolled-header" : "header"}>
    <div id="header">
      <div id="header-area">
        <div className="navbar">
          {/*로고*/}
          <Link to="/">
            <img src="/img/icons/fooiting.png" alt="" />
          </Link>

          {/*검색창*/}
          <div className="search-container">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={query}
              onChange={handleInputChange}
              className="search-input" // 커스텀 클래스 적용
            />
            <button onClick={handleSearch} className="search-button">
              <SearchOutlined />
            </button>
          </div>
        </div>
        {/*상단 메뉴1 */}
        <div className="dropdown-Menu">
          <div className="dropdown">
            <span
              className="navbarMenu"
              onClick={() => toggleDropdown1(showDropdown1, setShowDropdown1)}
            >
              웨이팅TOP
            </span>
            {showDropdown1 && (
              <div className="dropdownContent">
                <Link to="../Main">하위 메뉴 1-1</Link>
                <Link to="/">하위 메뉴 1-2</Link>
                <Link to="/">하위 메뉴 1-3</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <span
              className="navbarMenu"
              onClick={() => toggleDropdown2(showDropdown2, setShowDropdown2)}
            >
              지역별TOP
            </span>
            {showDropdown2 && (
              <div className="dropdownContent">
                <Link to="/">하위 메뉴 1-1</Link>
                <Link to="/">하위 메뉴 1-2</Link>
                <Link to="/">하위 메뉴 1-3</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <Link to="../Loginexchk" className="navbarMenu">
              로그인
            </Link>
          </div>
          <div className="dropdown">
            <Link className="navbarMenu" to={"../SignupPage"}>
              회원가입
            </Link>
          </div>
          <div className="dropdown">
            <span
              className="navbarMenu"
              onClick={() => toggleDropdown3(showDropdown3, setShowDropdown3)}
            >
              고객센터▼
            </span>
            {showDropdown3 && (
              <div className="dropdownContent">
                <Link to="/">공지사항</Link>
                <Link to="/">자주하는 질문</Link>
                <Link to="/">1 : 1 문의</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
