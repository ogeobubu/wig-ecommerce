const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json({
      message: savedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json({
      message: orders,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    if (!order) {
      return res.status(400).json({
        message: "This order does not exist!",
      });
    } else {
      res.status(200).json({
        message: order,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.editOrder = async (req, res) => {
  try {
    const editOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: editOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Order has been deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.incomeOrder = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json({
      message: income,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
