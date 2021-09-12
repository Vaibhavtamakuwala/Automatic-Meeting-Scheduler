const express = require('express')
const cors = require('cors')
const app = express();
const createUser = require('./business-logic/users/create-user');
const logger = require('./shared/logger/winston-logger');
const dotenv = require('dotenv').config();
const initDB = require('./initDB')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT= process.env.PORT || 8081;

app.listen(PORT, function (req, res) {
    console.log('');
    console.log('|*****************************************************|');
    console.log('|-----------KYKz Api server started on port : ' + PORT + ' ----------|');
    console.log('|*****************************************************|');
    console.log('');
    logger.debug(`Know Your Kidz Api has started listening on port ${PORT}`);
    initDB();
})

/*************----------users controller------------************/
//create user api
app.post("/users", createUser)

