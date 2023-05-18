// Using Mongoose for Mongoo DB
const mongoose = require("mongoose");
// Product Schema
const ProductSchema = mongoose.Schema({
  name: { type: String, index: true },
  category: { type: String, index: true },
  sub_category: { type: String, index: true },
  quantity: Number,
  price: Number,
  description: String,
  color:{ type: String, default: "N/A" },
  sizes:{ type: String, default: "N/A" },
  brand:{ type: String, default: "N/A" },
  Warranty: { type: String, default: "N/A" },
  Return: { type: String, default: "N/A" },
  StandardShipping: { type: String, default: "N/A" },
  FastShipping: { type: String, default: "N/A" },
  image: String,
  rating: [
    {
      user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      value: Number,
      description:String
    },
  ],
  totalRating: { type: Number, default: 0 },
  NumberSold: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});
ProductSchema.index({ name: "text", category: "text" });
// Exporting Product Model
module.exports = mongoose.model("product", ProductSchema);
