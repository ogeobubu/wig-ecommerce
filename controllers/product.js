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
    const latestQuery = req.query.latest;
    const categoryQuery = req.query.category;

    let products;

    if (latestQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    }

    if (categoryQuery) {
      products = await Product.find({
        categories: {
          $in: [categoryQuery],
        },
      }).limit(5);
    }

    products = await Product.find();

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

exports.editProduct = async (req, res) => {
  try {
    const editProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: editProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Product has been deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
