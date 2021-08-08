"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var passport = require('passport');

var session = require('express-session');

var MongoStore = require('connect-mongo')(session);

var connectDB = require('./config/database');

var authRoutes = require('./routes/auth');

var homeRoutes = require('./routes/home');

var todoRoutes = require('./routes/todos');

require('dotenv').config({
  path: './config/.env'
}); // Passport config


require('./config/passport')(passport);

connectDB();
app.set('view engine', 'ejs');
app.use(express["static"]('public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json()); // Sessions

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
})); // Passport middleware

app.use(passport.initialize());
app.use(passport.session());
app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is running, you better catch it!');
});