// Using Mongoose for Mongoo DB
const mongoose = require("mongoose");
// User Schema
const UserSchema = mongoose.Schema({
  name: String,
  cnic: String,
  dob: Date,
  gender: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: true },
  image: { type: String },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  wishList: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  }],
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
      quantity:{type:Number,default:1}
    },
  ],
});
// Expoting User Model
module.exports = mongoose.model("users", UserSchema);
