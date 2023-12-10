const express = require('express')
const morgan = require('morgan')
const bp = require('body-parser')

// creating app component
const app = express()

// denote routes
const eventRoute = require('./routes/eventRoute')
const matchRoute = require('./routes/matchRoute')

// registrating logs and errors
app.use(morgan('dev'))

// pinning json format for body-parser
app.use(bp.json())

// handling CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if (req.message == 'Options') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})

// connecting routes
app.use('/events', eventRoute)
app.use('/matches', matchRoute)

// handling "not found" error
app.use((req, res, next) => {
    const error = new Error('Not found(404)');
    error.status = 404
    next(error)
})

// processing all created errors
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
})

// finally exports our app
module.exports = app