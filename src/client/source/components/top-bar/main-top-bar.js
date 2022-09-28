import "./main-top-bar.scss";
import categoryImg from "../../image/category.svg";
import markerImg from "../../image/marker.svg";
import userImg from "../../image/user.svg";
import menuImg from "../../image/menu.svg";
import { Link } from "react-router-dom";

function MainTopBar() {
  return (
    <div className="main-top-bar">
      <Link to="/category" className="category-btn">
        <img src={categoryImg} alt=""></img>
      </Link>
      <span className="set-location">
        <Link to="/set-location" className="set-location-btn">
          <img src={markerImg} alt=""></img>
        </Link>
        <span className="location">역삼동</span>
      </span>
      <span>
        <Link to="/login" className="set-user-btn">
          <img src={userImg} alt=""></img>
        </Link>
        <Link to="/menu" className="menu-btn">
          <img src={menuImg} alt=""></img>
        </Link>
      </span>
    </div>
  );
}

export default MainTopBar;
