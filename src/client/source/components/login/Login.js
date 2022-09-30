import TopBar from "../top-bar/TopBar";
import "./Login.scss";

function Login() {
  return (
    <div>
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
        <button className="register-btn">회원가입</button>
      </form>
    </div>
  );
}

export default Login;
