const db = require('../config/database')

module.exports = (table, request, id) => {
    return new Promise((resolve,reject) => {
        db.query('UPDATE ' + table + ' SET ' + request + ' WHERE id = ' + id, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}