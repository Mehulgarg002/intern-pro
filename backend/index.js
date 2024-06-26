const connectToMongo = require('./db')
var cors = require('cors')
require("dotenv").config();

connectToMongo();

const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})