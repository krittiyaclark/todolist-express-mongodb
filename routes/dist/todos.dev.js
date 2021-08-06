"use strict";

var express = require('express');

var router = express.Router();

var todosController = require('../controllers/todos');

var _require = require('../middleware/auth'),
    ensureAuth = _require.ensureAuth,
    ensureGuest = _require.ensureGuest; // Azurse Auth


router.get('/', ensureAuth, todosController.getTodos);
router.post('/createTodo', todosController.createTodo);
router.put('/markComplete', todosController.markComplete);
router.put('/markIncomplete', todosController.markIncomplete);
router["delete"]('/deleteTodo', todosController.deleteTodo);
module.exports = router;