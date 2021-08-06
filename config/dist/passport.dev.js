"use strict";

var OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

var mongoose = require('mongoose');

var config = require('../config/config');

var User = require('../models/User');

module.exports = function (passport) {
  passport.use(new OIDCStrategy({
    identityMetadata: config.creds.identityMetadata,
    clientID: config.creds.clientID,
    responseType: config.creds.responseType,
    responseMode: config.creds.responseMode,
    redirectUrl: config.creds.redirectUrl,
    allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
    clientSecret: config.creds.clientSecret,
    validateIssuer: config.creds.validateIssuer,
    isB2C: config.creds.isB2C,
    issuer: config.creds.issuer,
    passReqToCallback: config.creds.passReqToCallback,
    scope: config.creds.scope,
    loggingLevel: config.creds.loggingLevel,
    nonceLifetime: config.creds.nonceLifetime,
    nonceMaxAmount: config.creds.nonceMaxAmount,
    useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
    cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
    clockSkew: config.creds.clockSkew
  }, function _callee(accessToken, refreshToken, profile, done) {
    var newUser, user;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('auth: ', profile);
            newUser = {
              microsoftId: profile.oid,
              displayName: profile.displayName
            };
            _context.prev = 2;
            _context.next = 5;
            return regeneratorRuntime.awrap(User.findOne({
              microsoftId: profile.oid
            }));

          case 5:
            user = _context.sent;

            if (!user) {
              _context.next = 10;
              break;
            }

            done(null, user);
            _context.next = 14;
            break;

          case 10:
            _context.next = 12;
            return regeneratorRuntime.awrap(User.create(newUser));

          case 12:
            user = _context.sent;
            done(null, user);

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);
            console.error(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 16]]);
  }));
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      return done(err, user);
    });
  });
};