import { useLocation } from "react-router-dom";
import "./Content.scss";
import heartBtnImg from "../../image/heart-btn.svg";
import activeHeartBtnImg from "../../image/active-heart-btn.svg";
import { useEffect, useState } from "react";
import TopBar from "../top-bar/TopBar";
import axios from "axios";

function Content() {
  const [heart, setHeart] = useState(false);
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const product = location.state.object;

  useEffect(() => {
    console.log(product.seller_id);
    axios.get(`/user?userid=${product.seller_id}`).then((res) => {
      console.log(res);
      setUserName(res.data[0].name);
    });
  }, []);

  function clickHeart() {
    setHeart((heart) => !heart);
  }
  return (
    <div className="content">
      <TopBar title="" />
      <img
        className="product-image"
        src={location.state.object.product_image}
        alt=""
      />
      <div className="product-data">
        <div className="product-name">{product.product_name}</div>

        <div className="product-category-and-update-time">{
          `${product.category} ∙ 3분전` /* 시간은 임시값 */
        }</div>
        <div className="product-content">{product.product_content}</div>
        <div className="product-count">{`채팅 ${product.chat_count} ∙ 관심 ${product.heart_count} ∙ 조회 ${product.view_count}`}</div>
      </div>
      <div className="seller-data">
        <span className="seller-notice">판매자 정보</span>
        <div>
          <span className="seller-name">{userName}</span>
          <span className="seller-address">{product.address}</span>
        </div>
      </div>
      <div className="product-footer">
        <span onClick={clickHeart}>
          <img src={heart ? activeHeartBtnImg : heartBtnImg} alt="" />
        </span>
        <span>{product.price.toLocaleString()}원</span>
        <span className="connect-btn">문의하기</span>
      </div>
    </div>
  );
}

export default Content;
