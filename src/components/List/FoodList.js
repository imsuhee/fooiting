import Food from "./Food";
import { dummy } from "../../MoveDummy";
import "../../Style/List/FoodList.css";

function FoodList() {
  return (
    <div>
      <div className="food-list-container">
        {dummy.results.map((item) => {
          return (
            <div>
              <Food
                title={item.title}
                poster_path={item.poster_path}
                content={item.content}
                foodname={item.foodname}
                worktime={item.worktime}
                vote_average={item.vote_average}
                // point={item.point}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FoodList;
