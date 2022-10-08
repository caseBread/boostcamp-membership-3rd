const express = require("express");
const user = require("../controllers/user.ctrl");
const { selectUserName } = require("../models/db");
const router = express.Router();

router.get("/", user.checkUser);

module.exports = router;
