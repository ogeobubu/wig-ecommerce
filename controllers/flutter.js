const uuid = require("uuid");
const axios = require("axios");

exports.payment = async (req, res) => {
  try {
    const sentData = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      req.body,
      {
        headers: {
          Authorization: `Bearer FLWSECK_TEST-34522690dd6d99eddd0c6d0a6fe1da2d-X`,
        },
      }
    );
    res.status(200).json({
      message: sentData.data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
