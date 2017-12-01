// MySQL Speficic Config
const mysql = require('mysql');
const dbconfig = require('../config/database');
const connection = mysql.createConnection(dbconfig.connection);
// Use a specific database
connection.query('USE ' + dbconfig.connection.database);

const UserModal = module.exports;

module.exports.getAllUsers = (callback) => {
    connection.query('SELECT * FROM user', (error, results, fields) => {
        if (error) {
            throw error;
        } else if (results.length > 0) {
            callback(null, results);
        } else {
            callback(false, null);
        }
    });
}

module.exports.getAllControleurs = (callback) => {
    connection.query('SELECT * FROM user WHERE role_id = 2', (error, results, fields) => {
        if (error) {
            throw error;
        } else if (results.length > 0) {
            callback(null, results);
        } else {
            callback(false, null);
        }
    });
}

module.exports.getUserById = function(id, callback) {
    connection.query('SELECT * FROM user WHERE user_id = ?', [id], (error, results, fields) => {
        if (error) {
            throw error;
        } else if (results.length > 0) {
            callback(null, results);
        } else {
            callback(false, null);
        }
    });
}

module.exports.getUserByUsername = function(username, callback) {
    connection.query('SELECT * FROM user WHERE user_name = ?', [username], (error, results, fields) => {
        if (error) {
            throw error;
        } else if (results.length > 0) {
            callback(null, results);
        } else {
            callback(false, null);
        }
    });
}

module.exports.insertNewUser = function(user, callback) {
    // Password hashing using bcryptjs
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            connection.query('INSERT INTO user (role_id, user_name, password, active) VALUES (?,?,?,?)', [
                user.role_id,
                user.user_name,
                hash, // hashedPassword
                user.active
            ], (error, results, fields) => {
                if (error) {
                    throw error;
                } else {
                    callback(null, results.insertId);
                }
            });
        });
    });
}

module.exports.comparePassword = function(typedPassword, hashedPassword, callback) {
    bcrypt.compare(typedPassword, hashedPassword, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}