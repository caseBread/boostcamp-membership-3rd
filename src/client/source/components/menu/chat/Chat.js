import TopBar from "../../top-bar/TopBar";
import { io } from "socket.io-client";
import "./Chat.js";
import { useEffect, useState } from "react";

function Chat() {
  const [tempChat, setTempChat] = useState([]);

  const socket = io();
  socket.on("connect", () => {
    console.log("client connect!" + socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });

  useEffect(() => {
    socket.on("server_to_client", (msg) => {
      console.log(msg);
      setTempChat((tempChat) => tempChat.concat(<p>{msg}</p>));
      console.log(tempChat);
      window.scrollTo(0, document.body.scrollHeight);
    });
  }, []);

  function submitFalse(event) {
    event.preventDefault();
    const message = event.target.chat.value;
    event.target.chat.value = "";
    console.log(message);
    socket.emit("client_to_server", message);
  }

  return (
    <div className="chat">
      <TopBar title="UserE" />
      <p>this is chat</p>
      <form onSubmit={submitFalse}>
        <input type="text" name="chat" autoComplete="off" />
        <button>send</button>
      </form>
      {tempChat}
    </div>
  );
}

export default Chat;
