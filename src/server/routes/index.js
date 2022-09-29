const express = require("express");
const apiRouter = require("./apiRouter");
const productAPI = require("./product-api");

const router = express.Router();

router.use("/api", apiRouter);
router.use("/product", productAPI);

// 아무것도 만족하지 않으면 여기로 옴.
router.get("/*", async function (req, res, next) {
  res.render("index");
});

module.exports = router;
