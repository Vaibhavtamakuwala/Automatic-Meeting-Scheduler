const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Schools = require('../../persistent-models/school')
const logger = require("../../shared/logger/winston-logger");

router.get('/schools', async(req, res) => {
    try {
        const school = await Schools.find()
        console.log(school)
        res.send(school)
    } catch (err) {
        res.send('Error' + err)
    }
})
module.exports = router