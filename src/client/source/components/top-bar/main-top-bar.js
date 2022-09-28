import "./main-top-bar.scss";
import categoryImg from "../../image/category.svg";
import markerImg from "../../image/marker.svg";
import userImg from "../../image/user.svg";
import menuImg from "../../image/menu.svg";
function MainTopBar() {
  return (
    <div className="main-top-bar">
      <span className="category-btn">
        <img src={categoryImg} alt=""></img>
      </span>
      <span className="set-location-btn">
        <img src={markerImg} alt=""></img>
        <span className="location">역삼동</span>
      </span>
      <span>
        <span className="set-user-btn">
          <img src={userImg} alt=""></img>
        </span>
        <span className="menu-btn">
          <img src={menuImg} alt=""></img>
        </span>
      </span>
    </div>
  );
}

export default MainTopBar;
