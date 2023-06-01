const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/UserRoutes')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log('connect to DB')
    })
    .catch((err) => {
      throw err
    })
}

app.use('/api/user', userRoutes)

app.listen(5000, () => {
  connect()
  console.log('connected')
})
