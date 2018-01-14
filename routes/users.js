var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

const UserModal = require('../modals/users');

router.get('/getUsers', function(req, res, next) {
    UserModal.getUsers((err, result) => {
        res.json(result);
    });
});

router.get('/getUserById/:id', function(req, res, next) {
    UserModal.getUserById(req.params.id, (err, result) => {
        res.json(result);
    });
});

module.exports = router;