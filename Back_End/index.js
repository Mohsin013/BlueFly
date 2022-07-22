const express = require("express");
const productRouter = require("./routes/products");
const authRouter = require("./routes/auth");
let mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/products", productRouter);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB.");
});
let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Listening On Port 7492");
});
