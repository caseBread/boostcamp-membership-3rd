const express = require("express");
const { checkUser } = require("../models/db");
const router = express.Router();

router.get("/", async function (req, res, next) {
  const { id } = req.query;
  const check = checkUser(id);

  if (check) {
    res.status(200);
  } else {
    res.status(401);
  }
});

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

module.exports = router;
