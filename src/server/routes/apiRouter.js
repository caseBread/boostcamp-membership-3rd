const express = require("express");
const router = express.Router();

router.get("/product-list", async function (req, res, next) {
  // const getProductList = await getProductList();

  // 주소 받으면 주소에 해당하는 상품 select하여 보내준다.
  const address = req.body.address;
  res.send(getProductList(address));
  res.status(200);
});

router.get("/login", async function (req, res, next) {
  res.setHeader("Set-Cookie", [
    "LOGIN_TOKEN=1234; domain=localhost:3000; Path=/;",
  ]);
  res.status(200);
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
