const Product = require("../models/Product");

exports.createProducts = async (req, res) => {
  const { title, description, image, categories, hairLength, color, price } =
    req.body;
  try {
    const newProduct = {
      title,
      description,
      image,
      categories,
      hairLength,
      color,
      price,
    };
    const savedProduct = await new Product(newProduct).save();

    res.status(200).json({
      message: savedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = req.query.latest
      ? await Product.find().sort({ _id: -1 }).limit(5)
      : await Product.find();

    res.status(200).json({
      message: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({
        message: "This product does not exist!",
      });
    } else {
      res.status(200).json({
        message: product,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
