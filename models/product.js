const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  tittle: String,
  description: String,
  image: String,
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
