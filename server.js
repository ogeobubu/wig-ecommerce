const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);

const connection_uri = process.env.DATABASE;

mongoose
  .connect(connection_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has successfully connected!"))
  .catch((error) =>
    console.log("MongoDB has failed to successfully connected.")
  );

const PORT = process.env.PORT_PATH || process.env.PORT;

app.listen(PORT, () => {
  return console.log(`Server running on PORT: ${PORT}`);
});
