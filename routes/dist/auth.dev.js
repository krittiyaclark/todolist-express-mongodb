"use strict";

var express = require('express');

var passport = require('passport');

var config = require('../config/config');

var router = express.Router();
router.get('/login', function (req, res, next) {
  passport.authenticate('azuread-openidconnect', {
    response: res,
    resourceURL: config.resourceURL,
    customState: 'my_state',
    failureRedirect: '/'
  })(req, res, next);
}, function (req, res) {
  console.log('Login was called in the Sample');
  res.redirect('/todos');
});
router.get('/openid/return', function (req, res, next) {
  passport.authenticate('azuread-openidconnect', {
    response: res,
    failureRedirect: '/'
  })(req, res, next);
}, function (req, res) {
  console.log('We received a return from AzureAD.');
  res.redirect('/todos');
});
router.post('/openid/return', function (req, res, next) {
  passport.authenticate('azuread-openidconnect', {
    response: res,
    failureRedirect: '/'
  })(req, res, next);
}, function (req, res) {
  console.log('We received a return from AzureAD.');
  res.redirect('/todos');
});
router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});
module.exports = router;