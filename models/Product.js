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
      type: String,
    },
    price: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("EcommerceProduct", userProduct);

module.exports = Product;
