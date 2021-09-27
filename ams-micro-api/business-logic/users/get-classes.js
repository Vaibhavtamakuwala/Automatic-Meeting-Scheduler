const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Classes = require('../../persistent-models/classes')
const logger = require("../../shared/logger/winston-logger");

router.get('/classes', async(req, res) => {
    try {
        const classes = await Classes.find()
        res.send(classes)
    } catch (err) {
        res.send('Error' + err)
    }
})
module.exports = router