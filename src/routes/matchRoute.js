const express = require('express')
const get = require('../tools/getData')
const post = require('../tools/postData')
const del = require('../tools/deleteData')
const update = require('../tools/updateData')

// create a route handler
const router = express.Router()

// handling GET request
router.get('/', (req, res, next) => {
    get('matches').then((data) => {
        res.status(200).json({
            status: 'request processed',
            directory: 'matches',
            result: data
        })
    })
})

// handling POST request
router.post('/', (req, res, next) => {
    post('matches', req.body).then((data) => {
        res.status(200).json({
            status: 'request processed',
            directory: 'matches',
            result: data
        })
    })
})

// handling DELETE request
router.delete('/', (req, res, next) => {
    del('matches', req.body.id).then((data) => {
        res.status(200).json({
            status: 'request processed',
            directory: 'matches',
            result: data
        })
    })
})

// handling PATCH request
router.patch('/', (req, res, next) => {
    const request = 'event = "' + req.body.event  + '", '
    + 'type = "' + req.body.type + '", '
    + 'team1_name = "' + req.body.team1_name + '", '
    + 'team1_score = "' + req.body.team1_score + '", '
    + 'team2_name = "' + req.body.team2_name + '", '
    + 'team2_score = "' + req.body.team2_score + '"'
    update('matches', request, req.body.id).then((data) => {
        res.status(200).json({
            status: 'request processed',
            directory: 'events',
            result: data
        })
    })
})

// exports route handler
module.exports = router;