"use strict";

var express = require('express');

var router = express.Router();

var todosController = require('../controllers/todos');

router.get('/', todosController.getTodos);
router.post('/createTodo', todosController.createTodo);
router.put('/markComplete', todosController.markComplete);
router.put('/markIncomplete', todosController.markIncomplete);
router["delete"]('/deleteTodo', todosController.deleteTodo);
module.exports = router;