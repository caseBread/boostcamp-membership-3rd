import axios from "axios";
import { useEffect } from "react";
import "./Main.scss";
import ProductList from "./ProductList";
import MainTopBar from "./top-bar/main-top-bar";
import plusBtnImg from "../image/plus-btn.svg";
import { Link } from "react-router-dom";

function Main() {
  // const [list, setList] = useState([]);

  // useEffect(
  //   () => axios.get("/api/home-items").then((result) => setList(result.data)),
  //   []
  // );

  // 임시로 쿠키 저장하기.
  document.cookie = "address=역삼동";

  return (
    <div className="main-page">
      <MainTopBar />
      <ProductList />
      <Link to="/post">
        <button id="create-product-btn" type="button">
          <img src={plusBtnImg}></img>
        </button>
      </Link>
    </div>
  );
}

export default Main;
