const express = require('express')
const get = require('../tools/getData')
const post = require('../tools/postData')
const del = require('../tools/deleteData')
const update = require('../tools/updateData')

// create a route handler
const router = express.Router()

// handling GET request
router.get('/', (req, res, next) => {
    get('events').then((data) => {
        res.status(200).json({
            status: 'request processed',
            directory: 'events',
            result: data
        })
    })
}) 

// handling POST request
router.post('/', (req, res, next) => {
    post('events', req.body).then((data) => {
        res.status(200).json({
            status: 'request processed',
            directory: 'events',
            result: data
        })
    })
})

// handling DELETE request
router.delete('/', (req, res, next) => {
    del('events', req.body.id).then((data) => {
        res.status(200).json({
            status: 'request processed',
            directory: 'events',
            result: data
        })
    })
})

// handling PATCH request
router.patch('/', (req, res, next) => {
    const request = 'name = "' + req.body.name  + '", '
    + 'type = "' + req.body.type + '", '
    + 'begin = "' + req.body.begin + '", '
    + 'end = "' + req.body.end + '"'
    console.log(request)
    update('events', request, req.body.id).then((data) => {
        res.status(200).json({
            status: 'request processed',
            directory: 'events',
            result: data
        })
    })
})


module.exports = router;