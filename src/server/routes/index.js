const express = require("express");
const loginAPI = require("./login-api");
const productAPI = require("./product-api");
const userAPI = require("./user-api");
const router = express.Router();

router.use("/login", loginAPI);
router.use("/product", productAPI);
router.use("/user", userAPI);

// 아무것도 만족하지 않으면 여기로 옴.
router.get("/*", async function (req, res, next) {
  res.render("index");
});

module.exports = router;
