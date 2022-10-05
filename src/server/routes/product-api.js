const express = require("express");
const { redirect } = require("react-router-dom");
const { selectProductList } = require("../models/db");
const router = express.Router();

router.get("/list", async function (req, res, next) {
  const { address } = req.query;
  const value = await selectProductList(address);

  if (value) {
    res.send(value[0]); // [0] 붙혀주어야함 아니면 _buf 이상한값 붙음.
    res.status(200);
  } else {
    res.status(204);
  }
});

router.post("/new", async function (req, res, next) {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
