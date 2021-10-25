const Cart = require("../models/Cart");

exports.createCart = async (req, res) => {
  try {
    const newCart = await new Cart(req.body);
    const savedCart = await newCart.save();
    res.status(200).json({
      message: savedCart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) {
      return res.status(400).json({
        message: "This cart does not exist!",
      });
    } else {
      res.status(200).json({
        message: cart,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.editCart = async (req, res) => {
  try {
    const editCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: editCart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const deleteCart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Cart has been deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
