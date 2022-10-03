const express = require("express");
const passport = require("passport");
const { isAuthenticated } = require("../controllers/authenticated");
const router = express.Router();

router.get("/", isAuthenticated, async function (req, res, next) {
  res.status(200).send(req.user);
});

// passport 코드
router.get("/github", passport.authenticate("github"));
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/logout", async function (req, res, next) {
  req.session.destroy(() => req.session);
  res.status(204).redirect("/");
});

router.get("/*", async function (req, res, next) {
  res.status(404);
});

module.exports = router;
