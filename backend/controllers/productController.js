const Product = require("../models/Product");

// Add new product
exports.addProduct = async (req, res) => {
  try {
    const { title, description, price, images, category } = req.body;

    const newProduct = new Product({
      title,
      description,
      price,
      images,
      category,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFeaturedProducts = async (req, res) => {
  try {
    const featured = await Product.find({ isFeatured: true });
    res.json(featured);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.bulkUpdateFeatured = async (req, res) => {
   try {
    const { ids } = req.body; // array of product IDs
    await Product.updateMany(
      { _id: { $in: ids } },
      { $set: { isFeatured: true } }
    );
    res.json({ message: "Products updated to featured successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};