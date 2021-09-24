const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schoolsSchema = new mongoose.Schema({
    school_name: {
        type: String,
        required: true
    }
})
const school = mongoose.model('school', schoolsSchema);
module.exports = school;