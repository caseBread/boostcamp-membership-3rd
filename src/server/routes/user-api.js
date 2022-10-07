const express = require("express");
const { selectUserName } = require("../models/db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const user_id = req.query.userid;
  const value = await selectUserName(user_id);
  if (value) {
    res.send(value[0]);
    res.status(200);
  } else {
    res.status(204);
  }
});

module.exports = router;
