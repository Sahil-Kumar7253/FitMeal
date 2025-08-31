const mongoose = require('mongoose');
const config = require('../config');

const connectDB = () => {
    mongoose.connect(config.MONGO_URI).then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectDB;