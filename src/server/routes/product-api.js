const express = require("express");
const multer = require("multer");
const product = require("../controllers/product.ctrl");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/list", product.getList);

router.post("/new", upload.array("image"), product.insertProduct);

router.get("/*", (req, res, next) => {
  res.status(404);
});

module.exports = router;
