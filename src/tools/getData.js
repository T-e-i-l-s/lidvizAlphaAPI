const db = require('../config/database')

module.exports = (table) => {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM ' + table, (err, fields) => {
            if (err) reject(err)
            resolve(fields)
        })
    })
}