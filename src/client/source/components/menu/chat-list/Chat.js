import "./Chat.scss";
import { io } from "socket.io-client";

function Chat() {
  const socket = io();
  socket.on("connect", () => {
    console.log("client connect!" + socket.id);
  });

  return (
    <div className="chat">
      <p>this is chat</p>
    </div>
  );
}

export default Chat;
