import "./Product.scss";

function Product(props) {
  console.log(props);
  return (
    <div className="product">
      <div>{props.name}</div>
      <div>그림설명</div>
      <div>기타 등등</div>
    </div>
  );
}

export default Product;
