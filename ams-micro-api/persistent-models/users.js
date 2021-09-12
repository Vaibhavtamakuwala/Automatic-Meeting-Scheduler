const mongoose = require("mongoose")
const Schema = mongoose.Schema

const usersSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    email: {
        type: String,
        unique: [true, "Email id already present"],
    },
    contactNumber: Number,
    gender:String,
    dob: String,
    password:String,
    confirmPassword:String,
    profilePhoto: {
        data: Buffer,
        contentType: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    lastModifiedOn: {
        type: Date,
        default: Date.now
    },
    designation: String,
    schoolId:String,
    classId:String
});

const User = mongoose.model('User', usersSchema);
module.exports = User;