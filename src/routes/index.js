var express = require("express");
const { tempSelect } = require("../models/db");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const db = await tempSelect();
  res.render("index", { title: "Express", db: db });
});

module.exports = router;
