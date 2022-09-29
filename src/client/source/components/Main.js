import axios from "axios";
import { useEffect } from "react";
import "./Main.scss";
import ProductList from "./ProductList";
import MainTopBar from "./top-bar/main-top-bar";

function Main() {
  // const [list, setList] = useState([]);

  // useEffect(
  //   () => axios.get("/api/home-items").then((result) => setList(result.data)),
  //   []
  // );

  return (
    <div>
      <MainTopBar />
      <ProductList />
    </div>
  );
}

export default Main;
