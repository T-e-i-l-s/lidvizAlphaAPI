const db = require('../config/database')

module.exports = (table, data) => {
    return new Promise((resolve,reject) => {
        db.query('INSERT INTO ' + table + ' SET ?', data, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}