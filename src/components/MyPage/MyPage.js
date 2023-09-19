import React from "react";
import { Link } from "react-router-dom";
import "../../Style/MyPage.css";

function MyPage() {
  return (
    <div className="wrap">
      <div className="greenContainer">
        {/* <div className="grade"></div> */}
        <div className="name">마이페이지</div>
      </div>
      <div className="summaryContainer">
        <Link to="/" className="Linkitem">
          <div className="item">
            <div className="number">0</div>
            <div>예약내역</div>
          </div>
        </Link>

        <Link to="/" className="Linkitem">
          <div className="item">
            <div className="number">0</div>
            <div>예약후기</div>
          </div>
        </Link>

        <Link to="/" className="Linkitem">
          <div className="item">
            <div className="number">0</div>
            <div>문의</div>
          </div>
        </Link>
        <Link to="/" className="Linkitem">
          <div className="item">
            <div className="number">0</div>
            <div>찜</div>
          </div>
        </Link>
      </div>
      {/* <div className="shippingStatusContainer">
        <div className="title">주문/배송조회</div>
        <div className="status">
          <div className="item">
            <div>
              <div className="green number">6</div>
              <div className="text">장바구니</div>
            </div>
            <div className="icon"> {">"} </div>
          </div>
          <div className="item">
            <div>
              <div className="number">0</div>
              <div className="text">결제완료</div>
            </div>
            <div className="icon"> {">"} </div>
          </div>
          <div className="item">
            <div>
              <div className="green number">1</div>
              <div className="text">배송중</div>
            </div>
            <div className="icon"> {">"} </div>
          </div>
          <div className="item">
            <div>
              <div className="green number">3</div>
              <div className="text">구매확정</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="listContainer">
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">
            닉네임<span className="circle"></span>
          </div>
          <div className="right"> {">"} </div>
        </Link>
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">비밀번호변경</div>
          <div className="right"> {">"} </div>
        </Link>
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">문의</div>
          <div className="right"> {">"} </div>
        </Link>
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">찜</div>
          <div className="right"> {">"} </div>
        </Link>
      </div>

      <div className="listContainer">
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">
            예약목록<span className="circle"></span>
          </div>
          <div className="right"> {">"} </div>
        </Link>
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">예약후기</div>
          <div className="right"> {">"} </div>
        </Link>
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">문의</div>
          <div className="right"> {">"} </div>
        </Link>
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">찜</div>
          <div className="right"> {">"} </div>
        </Link>
      </div>
      <div className="listContainer">
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">
            <span>내지갑</span>
            <span className="smallLight">
              <span>|</span>
              <span>보유 적립금</span>
            </span>
          </div>
          <div className="right">
            <span className="blct">175 BLCT</span>
            {">"}{" "}
          </div>
        </Link>
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">알림</div>
          <div className="right"> {">"} </div>
        </Link>
        <Link to="/" className="item">
          <div className="icon">●</div>
          <div className="text">설정</div>
          <div className="right"> {">"} </div>
        </Link>
      </div>
      <div className="infoContainer">
        <Link to="/" className="item">
          <div>icon</div>
          <div>공지사항</div>
        </Link>
        <Link to="/" className="item">
          <div>icos</div>
          <div>이용안내</div>
        </Link>
        <Link to="/" className="item">
          <div>icon</div>
          <div>고객센터</div>
        </Link>
      </div>
    </div>
  );
}
export default MyPage;
