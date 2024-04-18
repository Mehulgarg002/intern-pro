const mongoose = require("mongoose")
// const mongoURI = "mongodb://127.0.0.1:27017/intern"

const connectToMongo = () => {
    mongoose.connect(process.env.DB)
    console.log('connected to mongo');
}

module.exports = connectToMongo;