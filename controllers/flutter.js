const uuid = require("uuid");
const axios = require("axios");

exports.payment = async (req, res) => {
  try {
    const payload = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      req.body,
      {
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_KEY}`,
        },
      }
    );
    res.status(200).json({
      message: payload.data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
