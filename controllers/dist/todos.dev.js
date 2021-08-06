"use strict";

var Todo = require('../models/Todo');

module.exports = {
  getTodos: function getTodos(req, res) {
    var todoItems, itemsLeft;
    return regeneratorRuntime.async(function getTodos$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(Todo.find({
              microsoftId: req.user.microsoftId
            }));

          case 3:
            todoItems = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(Todo.countDocuments({
              microsoftId: req.user.microsoftId,
              completed: false
            }));

          case 6:
            itemsLeft = _context.sent;
            res.render('todos.ejs', {
              todos: todoItems,
              left: itemsLeft
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  },
  createTodo: function createTodo(req, res) {
    return regeneratorRuntime.async(function createTodo$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(Todo.create({
              todo: req.body.todoItem,
              completed: false,
              microsoftId: req.user.microsoftId
            }));

          case 3:
            console.log('Todo has been added!');
            res.redirect('/todos');
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  markComplete: function markComplete(req, res) {
    return regeneratorRuntime.async(function markComplete$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(Todo.findOneAndUpdate({
              _id: req.body.todoIdFromJSFile
            }, {
              completed: true
            }));

          case 3:
            console.log('Marked Complete');
            res.json('Marked Complete');
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  markIncomplete: function markIncomplete(req, res) {
    return regeneratorRuntime.async(function markIncomplete$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(Todo.findOneAndUpdate({
              _id: req.body.todoIdFromJSFile
            }, {
              completed: false
            }));

          case 3:
            console.log('Marked Incomplete');
            res.json('Marked Incomplete');
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  deleteTodo: function deleteTodo(req, res) {
    return regeneratorRuntime.async(function deleteTodo$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(req.body.todoIdFromJSFile);
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap(Todo.findOneAndDelete({
              _id: req.body.todoIdFromJSFile
            }));

          case 4:
            console.log('Deleted Todo');
            res.json('Deleted It');
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 8]]);
  }
};