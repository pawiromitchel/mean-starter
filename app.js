const express = require('express');
const app = express();
const session = require('express-session');
const mysql = require("mysql");
const dbconfig = require('./config/database');
const connection = mysql.createConnection(dbconfig.connection);
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore({}, connection);
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passport')(passport); // pass passport for configuration
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const http = require('http');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({
    key: 'localSession',
    secret: 'nQjvPwZwAu5JuzUwXLk7xdEe5TNa8KueysvDDd7DD6S6MyqsdUA3gCvRVEecHt2rw5EZs9rx86AUuqnCg7zQWpaHbeeCSNqSuPNMp7GGgvNbPjkXhmbkVnzT4ccN6dKuYccJgXcKgBwsEEtFZGpXKpfb2J2vAaBRG3XpDyKpPPRnqEkpJbQBQaT9W6bUaTVZ3LXHDcFfSXnmYvGWeQtHM9G97VrRYTvU533TZcm7xfXbV6At4V8kRPKp72W5LZUD',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// authentication
require('./routes/login.js')(app, passport);

// register routes
app.use('/users', require('./routes/users'));
app.use('/batches', require('./routes/batches'));

// all 404 routes must go to the homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Backend running on localhost:${port}`));