import Product from "./Product";
import "./ProductList.scss";

function ProductList() {
  const productNames = [
    {
      name: "파랑 선풍기",
      address: "역삼동",
      ago: 2,
      price: 24500,
      chatCount: 1,
      img: "https://user-images.githubusercontent.com/92029332/192843294-3d3a66b7-c171-4626-9475-b64445aa9447.png",
    },
  ]; // 임시 데이터
  const list = productNames.map((product, index) => (
    <Product object={product} key={index} /> // 여기서 map사용할 때 key를 넣으래. 형제끼리 구분하기 위함 (https://crong-dev.tistory.com/47)
  ));
  return <div>{list}</div>;
}

export default ProductList;
