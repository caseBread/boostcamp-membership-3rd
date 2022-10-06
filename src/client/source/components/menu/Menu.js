import { useState } from "react";
import Chat from "./chat-list/Chat";
import TopBar from "../top-bar/TopBar";
import "./Menu.scss";
import Sell from "./sell-list/Sell";
import Like from "./like-list/Like";

function Menu() {
  const [content, setContent] = useState();

  const contentSetting = ({ target }) => {
    if (target.id === "sell-list") {
      setContent(<Sell />);
    } else if (target.id === "chat-list") {
      setContent(<Chat />);
    } else if (target.id === "like-list") {
      setContent(<Like />);
    }
  };

  return (
    <div className="menu">
      <TopBar title="메뉴" />
      <div className="menu-list">
        <input
          id="sell-list"
          type="radio"
          name="jadsqwo21e"
          onClick={contentSetting}
        />
        <label for="sell-list">판매목록</label>
        <input
          id="chat-list"
          type="radio"
          name="jadsqwo21e"
          onClick={contentSetting}
        />
        <label for="chat-list">채팅</label>
        <input
          id="like-list"
          type="radio"
          name="jadsqwo21e"
          onClick={contentSetting}
        />
        <label for="like-list">관심목록</label>
      </div>
      {content}
    </div>
  );
}

export default Menu;
