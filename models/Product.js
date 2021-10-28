const mongoose = require("mongoose");

const userProduct = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    hairLength: {
      type: String,
    },
    color: {
      type: Array,
    },
    price: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("EcommerceProduct", userProduct);

module.exports = Product;
