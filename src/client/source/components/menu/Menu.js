import { useState } from "react";
import TopBar from "../top-bar/TopBar";
import "./Menu.scss";
import SellList from "./sell-list/SellList";
import ChatList from "./chat/ChatList";
import LikeList from "./like-list/LikeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./chat/Chat";

function Menu() {
  const [content, setContent] = useState();

  const contentSetting = ({ target }) => {
    if (target.id === "sell-list") {
      setContent(<SellList />);
    } else if (target.id === "chat-list") {
      setContent(<ChatList />);
    } else if (target.id === "like-list") {
      setContent(<LikeList />);
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
