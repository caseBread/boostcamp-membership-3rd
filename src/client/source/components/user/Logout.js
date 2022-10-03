import axios from "axios";
import TopBar from "../top-bar/TopBar";
import "./Logout.scss";

function Logout(props) {
  function logoutBtn() {
    location.href = "/login/logout";
  }

  return (
    <div>
      <TopBar title="내 계정" />
      <main>
        <div className="user-name">{props.userName}</div>
        <button className="logout-btn" onClick={logoutBtn}>
          로그아웃
        </button>
      </main>
    </div>
  );
}

export default Logout;
