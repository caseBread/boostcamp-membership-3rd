const express = require("express");
const { selectProductList } = require("../models/db");
const router = express.Router();

router.get("/list", async function (req, res, next) {
  const { address } = req.query;
  const value = await selectProductList(address);

  if (value) {
    console.log(value[0]);
    res.send(value[0]); // [0] 붙혀주어야함 아니면 _buf 이상한값 붙음.
    res.status(200);
  } else {
    res.status(204);
  }
});

module.exports = router;
