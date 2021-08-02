"use strict";

var deleteBtn = document.querySelectorAll('.del');
var todoItem = document.querySelectorAll('.todoItem span');
var todoComplete = document.querySelectorAll('.todoItem span.completed');
Array.from(deleteBtn).forEach(function (el) {
  el.addEventListener('click', deleteTodo);
});
Array.from(todoItem).forEach(function (el) {
  el.addEventListener('click', markComplete);
});
Array.from(todoComplete).forEach(function (el) {
  el.addEventListener('click', undo);
});

function deleteTodo() {
  var todoText, response, data;
  return regeneratorRuntime.async(function deleteTodo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          todoText = this.parentNode.childNodes[1].innerText;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('deleteTodo', {
            method: 'delete',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              rainbowUnicorn: todoText
            })
          }));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          console.log(data);
          location.reload();
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, [[1, 12]]);
}

function markComplete() {
  var todoText, response, data;
  return regeneratorRuntime.async(function markComplete$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          todoText = this.parentNode.childNodes[1].innerText;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch('markComplete', {
            method: 'put',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              rainbowUnicorn: todoText
            })
          }));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context2.sent;
          console.log(data);
          location.reload();
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this, [[1, 12]]);
}

function undo() {
  var todoText, response, data;
  return regeneratorRuntime.async(function undo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          todoText = this.parentNode.childNodes[1].innerText;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(fetch('undo', {
            method: 'put',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              rainbowUnicorn: todoText
            })
          }));

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context3.sent;
          console.log(data);
          location.reload();
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, this, [[1, 12]]);
}