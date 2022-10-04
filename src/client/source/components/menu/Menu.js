import TopBar from "../top-bar/TopBar";
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <TopBar title="메뉴" />
      <div className="menu-list">
        <input id="sell-list" type="radio" name="jadsqwo21e" />
        <label for="sell-list">판매목록</label>
        <input id="chat-list" type="radio" name="jadsqwo21e" />
        <label for="chat-list">채팅</label>
        <input id="like-list" type="radio" name="jadsqwo21e" />
        <label for="like-list">관심목록</label>
      </div>
    </div>
  );
}

export default Menu;
