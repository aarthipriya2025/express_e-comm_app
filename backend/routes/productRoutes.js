const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts } = require("../controllers/productController");

// POST → Add Product
router.post("/", addProduct);

// GET → Get All Products
router.get("/", getAllProducts);

module.exports = router;
