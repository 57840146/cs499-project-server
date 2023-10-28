const mongoose = require('mongoose')


const order = new Schema({
  date:String,
  total: Number,
  quantity: Number,
  user: String,
  paymentMethod: String,
})

const orderModelSchema = mongoose.Schema(
  {
    orders: [order]
  },
)

module.exports = mongoose.model('cart', orderModelSchema)
