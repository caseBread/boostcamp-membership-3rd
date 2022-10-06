import "./ChatList.scss";
import { Link } from "react-router-dom";

function ChatList() {
  return (
    <div className="chat-list">
      <p>this is chat-list</p>
      <Link to="/chat" className="chat-btn">
        <button>go chat</button>
      </Link>
    </div>
  );
}

export default ChatList;
