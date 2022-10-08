const express = require("express");
const multer = require("multer");
const product = require("../controllers/product");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/list", product.getList);

router.post("/new", upload.array("image"), product.insertProduct);

module.exports = router;
