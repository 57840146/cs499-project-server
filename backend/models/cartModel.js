const mongoose = require('mongoose')
// const order = require('./orderModel/order')

const cartItem = new Schema({
  title:String,
  description:String,
  price:String,
})

const cartModelSchema = mongoose.Schema(
  {
    items: [cartItem]
  },
)

module.exports = mongoose.model('cart', cartModelSchema)
