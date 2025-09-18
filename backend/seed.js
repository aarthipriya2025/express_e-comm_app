require('dotenv').config();
const mongoose = require("mongoose");
const Product = require("./models/Product");
const products = require("./products.json"); // your JSON file


const DB_URL = process.env.MONGODB_URI // or your Atlas URL

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");

  // Clear existing products (optional)
  return Product.deleteMany({});
})
.then(() => {
  console.log("Existing products removed");

  return Product.insertMany(products);
})
.then(() => {
  console.log("All products added successfully!");
  mongoose.disconnect();
})
.catch((error) => {
  console.error("Error seeding data:", error);
});
