import TopBar from "../../top-bar/TopBar";
import { io } from "socket.io-client";
import "./Chat.scss";
import { useEffect, useState } from "react";

const socket = io();

function Chat() {
  const [tempChat, setTempChat] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("client connect!" + socket.id);
    });

    socket.on("disconnect", () => {
      console.log(socket.id); // undefined
    });
  }, []);

  useEffect(() => {
    socket.off("server_to_client");
    socket.on("server_to_client", (data) => {
      console.log(data, name);
      setTempChat((tempChat) =>
        tempChat.concat(
          <div className="chat-one">
            <p className={data.name == name ? "me" : "other"}>{data.msg}</p>
          </div>
        )
      );
      console.log(tempChat);
      window.scrollTo(0, document.body.scrollHeight);
    });
  }, [name]);

  function submitFalse(event) {
    event.preventDefault();
    const message = event.target.chat.value;
    event.target.chat.value = "";
    console.log(message);
    socket.emit("client_to_server", { name: name, msg: message });
  }

  function submitName(event) {
    event.preventDefault();
    setName(event.target.name.value);
    alert(`이름이 '${event.target.name.value}'로 설정되었습니다.`);
  }

  return (
    <div className="chat">
      <TopBar title="UserE" />
      <form onSubmit={submitName}>
        <input type="text" name="name" />
        <button>설정</button>
      </form>
      <form onSubmit={submitFalse}>
        <input type="text" name="chat" autoComplete="off" />
        <button>send</button>
      </form>
      <div className="chat-content">{tempChat}</div>
    </div>
  );
}

export default Chat;
