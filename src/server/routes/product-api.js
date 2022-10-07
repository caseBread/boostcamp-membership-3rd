const express = require("express");
const multer = require("multer");
const { redirect } = require("react-router-dom");
const { selectProductList } = require("../models/db");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

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

router.post("/new", upload.array("image"), async function (req, res, next) {
  console.log(req.body);
  req.files.map((file) => console.log(file.filename));
  res.redirect("/");
});

module.exports = router;
