const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts, getFeaturedProducts, bulkUpdateFeatured } = require("../controllers/productController");

// POST → Add Product
router.post("/", addProduct);

// GET → Get All Products
router.get("/", getAllProducts);

router.get("/featured", getFeaturedProducts)


router.patch("/bulk/featured", bulkUpdateFeatured);
module.exports = router;
