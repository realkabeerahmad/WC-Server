const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  userId: String,
  Name: String,
  Address: String,
  Phone: String,
  ShippingFee: Number,
  TotalAmount: Number,
  Payment: String,
  status: { type: String, default: "Pending" },
  TrackingId: { type: String, default: "" },
  TrackingService: { type: String, default: "TCS" },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: { type: Number, default: 1 },
      price: { type: Number },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("order", OrderSchema);
