const express = require("express");
const user = require("../controllers/user.ctrl");
const { selectUserName } = require("../models/db");
const router = express.Router();

router.get("/", user.checkUser);
router.get("/*", (req, res, next) => {
  res.status(404);
});

module.exports = router;
