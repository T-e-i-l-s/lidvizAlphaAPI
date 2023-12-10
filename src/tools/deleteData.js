const db = require('../config/database')

module.exports = (table, id) => {
    return new Promise((resolve,reject) => {
        db.query('DELETE FROM ' + table + ' WHERE id = ' + id, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}