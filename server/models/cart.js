// Using Mongoose for Mongoo DB
const mongoose = require("mongoose");
// Cart Schema
const CartSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  products: [
    {
      product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});
// Exporting Product Model
module.exports = mongoose.model("cart", CartSchema);
