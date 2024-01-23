require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/userRoutes')
const questRoutes = require('./routes/questRoutes');

const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/users', userRoutes)
app.use('/api/quests', questRoutes)

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () =>
      console.log(`love you`, process.env.PORT, '&& connected to mongodb')
    )
  })
  .catch(err => {
    console.log(err)
  })

process.env
