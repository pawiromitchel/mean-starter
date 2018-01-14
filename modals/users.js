// MySQL Speficic Config
const mysql = require('mysql');
const dbconfig = require('../config/database');
const UserModal = module.exports;

module.exports.getUsers = (callback) => {
    // create the MySQL connection
    const connection = mysql.createConnection(dbconfig.connection);
    // build the query
    connection.query('SELECT * FROM user', (error, results, fields) => {
        if (error) {
            throw error;
        } else if (results.length > 0) {
            // end the connection properly
            connection.end();
            callback(null, results);
        } else {
            // end the connection properly
            connection.end();
            callback(false, null);
        }
    });
}

module.exports.getUserById = function(id, callback) {
    // create the MySQL connection
    const connection = mysql.createConnection(dbconfig.connection);
    // build the query
    connection.query('SELECT * FROM user WHERE user_id = ?', [id], (error, results, fields) => {
        if (error) {
            throw error;
        } else if (results.length > 0) {
            // end the connection properly
            connection.end();
            callback(null, results);
        } else {
            // end the connection properly
            connection.end();
            callback(false, null);
        }
    });
}