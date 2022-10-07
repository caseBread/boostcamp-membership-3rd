import TopBar from "../../top-bar/TopBar";
import { io } from "socket.io-client";
import "./Chat.scss";
import { useEffect, useState } from "react";
import sendBtnImg from "../../../image/send-btn.svg";

const socket = io();

function Chat() {
  const [tempChat, setTempChat] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("client connect!" + socket.id);
    });

    socket.on("disconnect", () => {
      console.log(socket.id);
    });
  }, []);

  useEffect(() => {
    socket.on("server_to_client", (data) => {
      setTempChat((tempChat) =>
        tempChat.concat(
          <div className="chat-one">
            <p className={data.id == socket.id ? "me" : "other"}>{data.msg}</p>
          </div>
        )
      );
      console.log(tempChat);
      window.scrollTo(0, document.body.scrollHeight);
    });
  }, []);

  function submitChat(event) {
    event.preventDefault();
    const message = event.target.chat.value;
    event.target.chat.value = "";
    console.log(message);
    socket.emit("client_to_server", {
      id: socket.id,
      msg: message,
    });
  }

  return (
    <div className="chat">
      <TopBar title="UserE" />

      <div className="chat-content">{tempChat}</div>
      <form className="input" onSubmit={submitChat}>
        <input
          className="input-text"
          type="text"
          name="chat"
          autoComplete="off"
          placeholder="메시지를 입력하세요."
        />
        <button className="input-btn">
          <img className="send-btn-img" src={sendBtnImg} alt=""></img>
        </button>
      </form>
    </div>
  );
}

export default Chat;
