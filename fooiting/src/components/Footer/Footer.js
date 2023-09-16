import React from "react";
import { Link } from "react-router-dom";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";
import "../../Style/Footer.css";

function Footer() {
  return (
    <div id="footer">
      {/*로고*/}
      <Link className="footer-img" to="/">
        <img src="/img/icons/fooiting.png" alt="" />
      </Link>
      <div className="footer-container">
        <div className="footer-social">
          <div className="footer-links">
            <Link to="/">회사소개 ㅣ</Link>
            <Link to="/">이용약관 ㅣ</Link>
            <Link to="/">개인정보처리방침 ㅣ</Link>
            <Link to="/">이용안내 ㅣ</Link>
            <Link to="/">자주묻는질문 ㅣ</Link>
          </div>
          <div className="footer-service">
            <h4>사업자등록변호 : 100-01-01891 </h4>
            <h4>
              상호 : 푸이팅 대표자 : 손부원 개인정보보호책임자 : 장동건
              jsdfjkds0901@naver.com
            </h4>{" "}
            <h4>주소: 서울특별시 금천수 가산동 109-5 대명빌딩 12층 1209호</h4>
            <h4>
              고객센터: 070-8989-7649 / 평일 오전 10 ~ 오후 6시 주말휴무
              (점심시간) 1시 30분 ~ 2시30분
            </h4>
          </div>
        </div>
        {/* Footer에 표시할 여러 링크. */}
        <div className="footer-service">
          <h1>고객센터</h1>
          <h1>070-8989-7649</h1>
          <h5>평일 오전 10시 ~ 오후 6시</h5>
          <h5>(점심시간) 오후1시30분 ~ 오후 2시30분</h5>
        </div>
      </div>
    </div>
  );
}
export default Footer;
