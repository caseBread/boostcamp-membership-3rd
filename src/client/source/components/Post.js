import "./Post.scss";
import TopBar from "./top-bar/TopBar";

function Post() {
  return (
    <div className="post">
      <TopBar title="글쓰기" check={true} />
      <input type="file" id="add-img" style={{ display: "none" }} />
      <label for="add-img">이미지 추가</label>
      <input type="text" placeholder="글 제목" required />
      <input type="text" placeholder="가격(선택사항)" />
      <input type="text" placeholder="게시글 내용을 작성해주세요." />
      <div>역삼동</div>
    </div>
  );
}

export default Post;
