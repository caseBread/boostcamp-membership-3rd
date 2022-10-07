import { useLocation } from "react-router-dom";
import "./Content.scss";

function Content() {
  const location = useLocation();
  const product = location.state.object;
  return (
    <div className="content">
      <img
        className="product-image"
        src={location.state.object.product_image}
        alt=""
      />
      <div className="product-name">{product.product_name}</div>

      <div className="product-category-and-update-time">{
        `${product.category} ∙ 3분전` /* 시간은 임시값 */
      }</div>
      <div className="product-content">{product.product_content}</div>
      <div className="product-count">{`채팅 ${product.chat_count} ∙ 관심 ${product.like_count} ∙ 조회 ${product.view_count}`}</div>
      <div className="seller-data">
        <span>판매자 정보</span>
        <span>{product.seller_id}</span>
        <span>{product.address}</span>
      </div>
      <div className="product-footer">
        <span>heart</span>
        <span>{product.price}</span>
        <span>문의하기</span>
      </div>
    </div>
  );
}

export default Content;
