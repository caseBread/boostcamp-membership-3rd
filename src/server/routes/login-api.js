const express = require("express");
const passport = require("passport");
const { isAuthenticated } = require("../controllers/authenticated");
const login = require("../controllers/login.ctrl");
const router = express.Router();

router.get("/", isAuthenticated, login.login);

// passport 코드
router.get("/github", passport.authenticate("github"));
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  login.afterPassport
);

router.get("/logout", login.logout);

router.get("/*", async function (req, res, next) {
  res.status(404);
});

module.exports = router;
