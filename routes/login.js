const mysql = require("mysql");
const dbconfig = require('../config/database');
const connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

// this function uses the passport-local local-login located in config/passport.js
module.exports = function(app, passport) {
    app.post('/login', (req, res, next) => {
        passport.authenticate('local-login', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) {
                return res.send("false");
            } else {
                if (req.body.remember) {
                    req.session.cookie.maxAge = 1000 * 60 * 3;
                } else {
                    req.session.cookie.expires = false;
                }
                return res.send(user);
            }
        })(req, res, next);
    });
};