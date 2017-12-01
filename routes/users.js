var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

const UserModal = require('../modals/users');

// =====================================
// User Management =====================
// =====================================
router.get('/', function(req, res, next) {
    // res.render('users.pug', { title: 'User Management', user : req.user} );
});

router.get('/getAllUsers', function(req, res, next) {
    UserModal.getAllUsers((err, result) => {
        res.json(result);
    });
});

router.get('/getAllControleurs', function(req, res, next) {
    UserModal.getAllControleurs((err, result) => {
        res.json(result);
    });
});

module.exports = router;