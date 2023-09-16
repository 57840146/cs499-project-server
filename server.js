const express = require('express')
const mongoose = require('mongoose')
const Router = require('./routes')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/exchange', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
