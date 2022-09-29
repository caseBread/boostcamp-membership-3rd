import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookieToObject } from "../../utils/util";
import Product from "./Product";
import "./ProductList.scss";

function ProductList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const cookie = getCookieToObject();
    console.log(cookie);

    // address 를 쿠키에 저장하고 가져오는 방식이 맞을까?
    axios
      .get(`/product/get-list?address=${cookie.address}`)
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {console.log(list)}
      {list.map((product, index) => (
        <Product object={product} key={index} />
      ))}
    </div>
  );
}

export default ProductList;
