const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/userAccount', require('./routes/userAccountRoutes'))

app.use('/api/items', require('./routes/itemRoutes'))

app.use('/api/orderHistory', require('./routes/orderHistoryRoutes'))

app.use('/api/sellHistory', require('./routes/sellHistoryRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
