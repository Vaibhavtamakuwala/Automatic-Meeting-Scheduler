const mongoose = require("mongoose")
const logger = require('./shared/logger/winston-logger');

module.exports = async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/kykzdb");
        console.log('');
        console.log('|*****************************************************|');
        console.log('|-----------mongo db connected succesfully ----------|');
        console.log('|*****************************************************|');
        console.log('');
        logger.info("mongo db connected succesfully")
    } catch (err) {
        logger.error('DB connection error: ' + err)
    }
}
