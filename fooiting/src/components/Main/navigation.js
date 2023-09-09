import React from "react";
import "../../Style/Navigation.css";
import { Link } from "react-router-dom";

function navigation() {
  //드롭다운

  return (
    <div className="navigation">
      {/* 카테고리 */}
      <Link to="/" className="nav-item">
        <div className="nav-icon">
          <img src="/img/icons/kor.png" alt="" />
        </div>
        <div className="nav-text">한식</div>
      </Link>
      <Link to="/" className="nav-item">
        <div className="nav-icon">
          <img src="/img/icons/us.png" alt="" />
        </div>
        <div className="nav-text">양식</div>
      </Link>
      <Link to="/" className="nav-item">
        <div className="nav-icon">
          <img src="/img/icons/jp.png" alt="" />
        </div>
        <div className="nav-text">일식</div>
      </Link>
      <Link to="/" className="nav-item">
        <div className="nav-icon">
          <img src="/img/icons/cn.png" alt="" />
        </div>
        <div className="nav-text">중식</div>
      </Link>
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
export default navigation;
