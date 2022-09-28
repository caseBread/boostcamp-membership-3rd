import Product from "./Product";
import "./ProductList.scss";

function ProductList() {
  const productNames = ["도자기 화병 5종", "빈티지 일본 경대", "베이킹 팬"];
  const list = productNames.map((product, index) => (
    <Product name={product} key={index} /> // 여기서 map사용할 때 key를 넣으래. 형제끼리 구분하기 위함 (https://crong-dev.tistory.com/47)
  ));
  return <div>{list}</div>;
}

export default ProductList;
