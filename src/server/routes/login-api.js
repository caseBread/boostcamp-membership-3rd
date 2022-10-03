const { default: axios } = require("axios");
const express = require("express");
const { checkUser } = require("../models/db");
const router = express.Router();
const oauthKey = require("../oauth.json");

router.get("/", async function (req, res, next) {
  const { id } = req.query;
  console.log(id);
  const check = await checkUser(id);
  const token = "temp";
  if (check) {
    res.status(200);
    res.cookie("LOGIN_TOKEN", token);
    res.redirect("/");
  } else {
    res.status(401);
    // res.redirect(로그인)   // 다시 로그인으로 돌아가야함. // history
  }
});

router.get("/github", async function (req, res, next) {
  console.log(13);

  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${oauthKey.client_id}&redirect_uri=http://localhost:3000/login/approval`
  );
});

router.get("/approval", async function (req, res, next) {
  const { code } = req.query; // 이게 access token ?
  console.log(code);

  const access_token = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${oauthKey.client_id}&client_secret=${oauthKey.client_secret}&code=${code}`
    )
    .then((res) => {
      return res.data.split("&")[0].split("=")[1];
    });
  console.log(access_token);
  req.session.access_token = access_token;
  res.redirect("/");
});

router.get("/access", async function (req, res, next) {
  if (!req.session.access_token) {
    res.send({ status: 401, data: "" });
  } else {
    const user_data = await axios
      .get("https://api.github.com/user", {
        headers: {
          Authorization: `token ${req.session.access_token}`,
        },
      })
      .then((res) => res) // res.data = user data
      .catch((res) => res.response);
    res.send({ status: user_data.status, data: user_data.data }); // 여기에 쌩 user_data 날리면 TypeError: Converting circular structure to JSON 뜸
  }
});

// 유저 확인
router.get("/user", async function (req, res, next) {
  const loginToken = req.cookies["LOGIN_TOKEN"];
  if (!loginToken) {
    res.status(401);
    return;
  }

  res.send(loginToken);
  res.status(200);
});

router.get("/logout", async function (req, res, next) {
  delete req.session.access_token;
  res.status(204);
  res.redirect("/");
});

router.get("/*", async function (req, res, next) {
  res.status(404);
});

module.exports = router;
