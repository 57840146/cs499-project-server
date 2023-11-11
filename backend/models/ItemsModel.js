const mongoose = require('mongoose')
const { Schema } = mongoose

const itemsSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Please add id'],
    },
    title: {
      type: String,
      required: [true, 'Please add title'],
    },
    price: {
      type: String,
      required: [true, 'Please add price'],
    },
    img: {
      type: String,
      required: [true, 'Please add img url'],
    },
    seller: { type: Schema.Types.ObjectId, ref: 'UserAccount' },
  },
  {
    timestamps: true,
    strict: false,
  },
)

module.exports = mongoose.model('Items', itemsSchema)
