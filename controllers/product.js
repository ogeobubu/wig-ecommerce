const Product = require("../models/Product");

exports.createProducts = async (req, res) => {
  const { title, description, image, categories, hairLength, color, price } =
    req.body;
  try {
    const newProduct = await new Product({
      title,
      description,
      image,
      categories,
      hairLength,
      color,
      price,
    }).save();

    res.status(200).json({
      message: "New product has been created.",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
