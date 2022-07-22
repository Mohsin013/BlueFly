const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    condition: {
      type: String,
    },
    price: {
      raw: {
        type: String,
      },
      extracted: {
        type: mongoose.Schema.Types.Decimal128,
      },
    },
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// let Product = mongoose.model("product", ProductSchema);
let Product = mongoose.model("data", ProductSchema);
module.exports = Product;

