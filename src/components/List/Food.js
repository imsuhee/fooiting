import { FaStar } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";
import { MdOutlineRateReview } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import "../../Style/List/Food.css";

const IMG_BASE_URL = "https://www.cometoplay.kr/data/main";

export default function Food({
  title,
  foodname,
  content,
  poster_path,
  worktime,
}) {
  return (
    <div className="food-container">
      <img src={IMG_BASE_URL + poster_path} alt="음식사진" />
      <div className="food-info">
        <div className="food-a">
          <h2>{title}</h2>
        </div>
        <div className="food-b">
          <p className="cont">{content}</p>
        </div>
        <div className="food-c">
          <span>{worktime}</span>
        </div>
        <div className="food-d">
          <p>{foodname}</p>
        </div>
      </div>
    </div>
  );
}
