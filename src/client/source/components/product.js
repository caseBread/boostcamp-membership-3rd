import { Link } from "react-router-dom";
import "./Product.scss";
import heartBtnImg from "../image/heart-btn.svg";
import speechBubbleImg from "../image/speech-bubble.svg";
import smallHeartImg from "../image/small-heart.svg";

function Product(props) {
  console.log(`create item : ${props.object.product_name}`);
  const obj = { ...props.object };

  return (
    <Link
      to="/content"
      state={{ object: props.object }}
      className="product"
      id={obj.product_id}
      style={{ textDecoration: "none" }}
    >
      <div className="picture">
        <img src={"./" + obj.product_image + ".png"} />
      </div>
      <div className="explain">
        <div className="product-name">{obj.product_name}</div>
        <div className="update-data">
          {obj.address} ∙ {2 /** obj.update-time */}시간 전
        </div>
        <div className="price">{obj.price.toLocaleString()}원</div>
      </div>
      <div className="about">
        <div className="heart">
          <img src={heartBtnImg}></img>
        </div>
        <div className="count">
          <img className="speech-bubble" src={speechBubbleImg}></img>
          <span>{obj.chat_count}</span>
          <img className="small-heart" src={smallHeartImg}></img>
          <span>{obj.heart_count}</span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
