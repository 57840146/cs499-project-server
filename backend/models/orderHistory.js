const mongoose = require('mongoose')
const { Schema } = mongoose

const orderHistorySchema = mongoose.Schema({
  buyer: { type: Schema.Types.ObjectId, ref: 'UserAccount' },
  orderItems: [
    {
      itemid: { type: Number },
      amount: { type: Number },
      price: { type: mongoose.Decimal128 },
      title: { type: String },
    },
  ],
  ordertotal: {
    type: mongoose.Decimal128,
  },
  orderdate: {
    type: String,
  },
})

module.exports = mongoose.model('OrderHistory', orderHistorySchema)
