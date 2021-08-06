"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('User', UserSchema);