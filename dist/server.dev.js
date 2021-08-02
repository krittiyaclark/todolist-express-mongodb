"use strict";

var express = require('express');

var app = express();

var MongoClient = require('mongodb').MongoClient;

var PORT = 2121;

require('dotenv').config();

var db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'todo';
MongoClient.connect(dbConnectionStr, {
  useUnifiedTopology: true
}).then(function (client) {
  console.log("Hey, connected to ".concat(dbName, " database"));
  db = client.db(dbName);
})["catch"](function (error) {
  return console.log(error);
});
app.set('view engine', 'ejs');
app.use(express["static"]('public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.get('/', function _callee(request, response) {
  var todoItems, itemsLeft;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.collection('todos').find().toArray());

        case 2:
          todoItems = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(db.collection('todos').countDocuments({
            completed: false
          }));

        case 5:
          itemsLeft = _context.sent;
          response.render('index.ejs', {
            zebra: todoItems,
            left: itemsLeft
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/createTodo', function (request, response) {
  db.collection('todos').insertOne({
    todo: request.body.todoItem,
    completed: false
  }).then(function (result) {
    console.log('Todo has been added!');
    response.redirect('/');
  });
});
app.put('/markComplete', function (request, response) {
  db.collection('todos').updateOne({
    todo: request.body.rainbowUnicorn
  }, {
    $set: {
      completed: true
    }
  }).then(function (result) {
    console.log('Marked Complete');
    response.json('Marked Complete');
  });
});
app.put('/undo', function (request, response) {
  db.collection('todos').updateOne({
    todo: request.body.rainbowUnicorn
  }, {
    $set: {
      completed: false
    }
  }).then(function (result) {
    console.log('Marked Complete');
    response.json();
  });
});
app["delete"]('/deleteTodo', function (request, response) {
  db.collection('todos').deleteOne({
    todo: request.body.rainbowUnicorn
  }).then(function (result) {
    console.log('Deleted Todo');
    response.json('Deleted It');
  })["catch"](function (err) {
    return console.log(err);
  });
});
app.listen(process.env.PORT || PORT, function () {
  console.log('Server is running, you better catch it!');
});