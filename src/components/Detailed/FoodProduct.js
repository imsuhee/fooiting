import AppCalendar from "./AppCalendar";
import FoodPhoto from "./FoodPoto";
import { dummy } from "../../MoveDummy";

function FoodProduct() {
  return (
    <div>
      <div>
        {dummy.results.map((item) => {
          return <FoodPhoto id={item.id} />;
        })}
      </div>

      <AppCalendar />
    </div>
  );
}
export default FoodProduct;
