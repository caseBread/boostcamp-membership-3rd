import TopBar from "../top-bar/TopBar";
import "./Category.scss";

function Category() {
  return (
    <div className="category">
      <TopBar title="카테고리" />
      <div className="container">
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">디지털기기</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">생활가전</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">가구/인테리어</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">게임/취미</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">생활/가공식품</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">스포츠/레저</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">여성패션/잡화</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">남성패션/잡화</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">유아동</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">뷰티/미용</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">반려동물</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">도서/티켓/음반</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">식물</p>
        </div>
        <div className="item">
          <div className="icon"></div>
          <p className="item-name">기타 중고물품</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
