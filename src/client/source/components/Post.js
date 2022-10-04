import "./Post.scss";
import TopBar from "./top-bar/TopBar";
import defaultImageImg from "../image/default-image.svg";
import blackMarkerImg from "../image/black-marker.svg";
function Post() {
  return (
    <div className="post">
      <TopBar title="글쓰기" check={true} />
      <div className="post-main">
        <input type="file" id="add-img" style={{ display: "none" }} />
        <label id="add-img-btn" for="add-img">
          <img src={defaultImageImg} alt="" />
          <span id="file-count">0/10</span>
        </label>
        <input id="product-title" type="text" placeholder="글 제목" required />
        <input id="product-price" type="text" placeholder="가격(선택사항)" />
        <input
          id="product-content"
          type="text"
          placeholder="게시글 내용을 작성해주세요."
        />
      </div>
      <div id="seller-address">
        <img id="black-marker-img" src={blackMarkerImg} alt="" />
        역삼동
      </div>
    </div>
  );
}

export default Post;
