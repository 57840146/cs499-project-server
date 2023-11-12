const mongoose = require('mongoose')
const { Schema } = mongoose

const sellHistorySchema = mongoose.Schema({
  seller: { type: Schema.Types.ObjectId, ref: 'UserAccount' },
  sellItems: [
    {
      itemid: { type: Number },
      amount: { type: Number },
      price: { type: mongoose.Decimal128 },
      title: { type: String },
    },
  ],
  address: { type: String },
  ordertotal: {
    type: mongoose.Decimal128,
  },
  orderdate: {
    type: String,
  },
})

module.exports = mongoose.model('SellHistory', sellHistorySchema)
