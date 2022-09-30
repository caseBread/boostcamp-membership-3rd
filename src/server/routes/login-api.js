const express = require("express");
const { checkUser } = require("../models/db");
const router = express.Router();

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

router.get("/*", async function (req, res, next) {
  res.status(404);
});

router.get("/logout", async function (req, res, next) {
  // 쿠키 지우는 과정
  res.status(204);
  res.redirect("/");
});

module.exports = router;
