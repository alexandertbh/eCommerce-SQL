const express = require("express");
const router = express.Router();

const categoryRoutes = require("./categoryController");
const productRoutes = require("./productController");
const tagRoutes = require("./tagController");

router.get("/", (req, res) => {
  res.send("this is the homepage!");
});

router.use("/api/category", categoryRoutes);
router.use("/api/product", productRoutes);
router.use("/api/tag", tagRoutes);

module.exports = router;
