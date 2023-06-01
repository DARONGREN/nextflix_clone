const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/UserRoutes')

const app = express()

app.use(cors())
app.use(express.json())

mongoose
  .connect(
    'mongodb+srv://dren9:1340abc@cluster0.srbt38q.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB Connetion Successfull')
  })
  .catch((err) => {
    console.log(err.message)
  })

app.use('/api/user', userRoutes)

app.listen(5000, console.log('server start'))
