var mysql = require("mysql");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.connection.database);

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
		done(null, user.user_id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
		connection.query("SELECT user.*, user_role.role FROM user INNER JOIN user_role ON user.role_id = user_role.role_id where user_id = ? ", [id] ,function(err,rows){	
			done(err, rows[0]);
		});
    });

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) { // callback with username and password from our form

         connection.query("SELECT user.*, password(?) as encrypted_password  FROM user WHERE user_name = ?" ,[password, username],function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
			
			// if the user is found but the password is wrong
            if (!( rows[0].password == rows[0].encrypted_password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

			// if the user is found and the password is correct, but the user has been disabled
            if (!( rows[0].active == 1))
                return done(null, false, req.flash('loginMessage', 'Your account has been disabled. Please contact a system administrator.')); // create the loginMessage and save it to session as flashdata
			
            // all is well, return successful user
            return done(null, rows[0]);
		});
    }));
}