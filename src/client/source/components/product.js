import "./Product.scss";
import heartBtnImg from "../image/heart-btn.svg";
import speechBubbleImg from "../image/speech-bubble.svg";

function Product(props) {
  const obj = { ...props.object };
  return (
    <div className="product">
      <div className="picture">
        <img src={obj.img}></img>
      </div>
      <div className="explain">
        <div className="product-name">{obj.name}</div>
        <div className="update-data">
          {obj.address} ∙ {obj.ago}시간 전
        </div>
        <div className="price">{obj.price.toLocaleString()}원</div>
      </div>
      <div className="about">
        <div className="heart">
          <img src={heartBtnImg}></img>
        </div>
        <div className="chat-count">
          <img className="heart-img" src={speechBubbleImg}></img>
          <span>{obj.chatCount}</span>
          {/* small heart 좋아요 수 */}
        </div>
      </div>
    </div>
  );
}

export default Product;
