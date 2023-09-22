const IMG_BASE_URL = "https://www.cometoplay.kr/data/main";

function FoodPhoto({ title, foodname, content, poster_path, worktime, id }) {
  return (
    <div>
      <div>{id}</div>
      {/* <img src={IMG_BASE_URL + id} alt="음식사진" /> */}
    </div>
  );
}
export default FoodPhoto;
