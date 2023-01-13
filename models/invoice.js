const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  customerDetails: {
    customerName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
  },
  productsList: [
    {
        productName: String,
        totalUnits: Number,
        pricePerUnit: Number,
        toatalValue: Number
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("invoice", invoiceSchema);