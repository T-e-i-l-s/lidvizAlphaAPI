const mysql = require('mysql')
const key = require('./key.json')

const db = mysql.createConnection(key);

module.exports = db;