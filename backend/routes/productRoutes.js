const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts, getFeaturedProducts, bulkUpdateFeatured, getProductById } = require("../controllers/productController");

// POST → Add Product
router.post("/", addProduct);

// GET → Get All Products
router.get("/", getAllProducts);

router.get("/featured", getFeaturedProducts)


router.patch("/bulk/featured", bulkUpdateFeatured);

// GET → Single Product by ID
router.get("/:id", getProductById);


module.exports = router;
