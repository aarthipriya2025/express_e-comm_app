const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [String],
  category: String,
  isFeatured: { type: Boolean, default: false } // ⭐ New field
});

module.exports = mongoose.model("Product", productSchema);
