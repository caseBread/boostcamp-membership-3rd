const passport = require("passport");
const GitHubStrategy = require("passport-github");
const { insertUser, checkUserName } = require("../models/db");
const oauth = require("../oauth.json");

// strategy를 미들웨어로
passport.use(
  new GitHubStrategy.Strategy(
    {
      clientID: oauth.client_id,
      clientSecret: oauth.client_secret,
      callbackURL: "http://localhost:3000/login/github/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const user = {
          name: profile._json.name,
          user_id: profile._json.login,
          address: "",
        };
        // User에 없으면 추가로 저장
        if (!(await checkUserName(user.name))) {
          insertUser(user);
        }

        return cb(null, user); // req에 user 삽입
      } catch (err) {
        return cb(err);
      }
    }
  )
);

// user를 session에 저장
passport.serializeUser((user, done) => {
  done(null, user);
});
// 로그인 성공 후, 페이지 접근 시 수행됨. session에 저장된 값을 이용해 DB에서 사용자 정보를 가져와 Request에 넘겨준다
passport.deserializeUser((user, done) => {
  done(null, user);
});
