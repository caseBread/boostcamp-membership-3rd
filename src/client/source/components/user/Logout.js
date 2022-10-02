import TopBar from "../top-bar/TopBar";
import "./Logout.scss";

function Logout(props) {
  return (
    <div>
      <TopBar title="내 계정" />
      <main>
        <div className="user-name">{props.userName}</div>
        <button className="logout-btn">로그아웃</button>
      </main>
    </div>
  );
}

export default Logout;
