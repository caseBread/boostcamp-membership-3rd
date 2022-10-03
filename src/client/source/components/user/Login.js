import axios from "axios";
import TopBar from "../top-bar/TopBar";
import "./Login.scss";

function Login() {
  function githubLogin() {
    location.href = "/login/github";
  }

  function accessUser() {
    axios.get("/login/access");
  }

  return (
    <div className="login">
      <TopBar title="로그인" />

      <form method="get" action="/login" name="login" className="login-form">
        <input
          type="text"
          className="input-id"
          placeholder="아이디를 입력하세요"
          required
          name="id"
        />
        <button type="submit" className="login-btn">
          로그인
        </button>
        <input type="button" className="register-btn" value="회원가입" />
        <input
          type="button"
          className="github-login-btn"
          onClick={githubLogin}
          value="깃허브 로그인"
        />
      </form>
    </div>
  );
}

export default Login;
