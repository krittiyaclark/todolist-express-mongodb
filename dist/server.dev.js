"use strict";

var express = require('express');

var app = express();

var connectDB = require('./config/database');

var homeRoutes = require('./routes/home');

var todoRoutes = require('./routes/todos');

require('dotenv').config({
  path: './config/.env'
});

connectDB();
app.set('view engine', 'ejs');
app.use(express["static"]('public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use('/', homeRoutes);
app.use('/todos', todoRoutes);
app.listen(process.env.PORT, function () {
  console.log('Server is running, you better catch it!');
}); // const MongoClient = require('mongodb').MongoClient
// const PORT = 2121
// let db,
// 	dbConnectionStr = process.env.DB_STRING,
// 	dbName = 'todo'
// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
// 	.then((client) => {
// 		console.log(`Hey, connected to ${dbName} database`)
// 		db = client.db(dbName)
// 	})
// 	.catch((error) => console.log(error))
// app.get('/', async (request, response) => {
// 	const todoItems = await db.collection('todos').find().toArray()
// 	const itemsLeft = await db
// 		.collection('todos')
// 		.countDocuments({ completed: false })
// 	response.render('index.ejs', { zebra: todoItems, left: itemsLeft })
// })
// app.post('/createTodo', (request, response) => {
// 	db.collection('todos')
// 		.insertOne({ todo: request.body.todoItem, completed: false })
// 		.then((result) => {
// 			console.log('Todo has been added!')
// 			response.redirect('/')
// 		})
// })
// app.put('/markComplete', (request, response) => {
// 	db.collection('todos')
// 		.updateOne(
// 			{ todo: request.body.rainbowUnicorn },
// 			{
// 				$set: {
// 					completed: true,
// 				},
// 			}
// 		)
// 		.then((result) => {
// 			console.log('Marked Complete')
// 			response.json('Marked Complete')
// 		})
// })
// app.put('/undo', (request, response) => {
// 	db.collection('todos')
// 		.updateOne(
// 			{
// 				todo: request.body.rainbowUnicorn,
// 			},
// 			{
// 				$set: {
// 					completed: false,
// 				},
// 			}
// 		)
// 		.then((result) => {
// 			console.log('Marked Complete')
// 			response.json()
// 		})
// })
// app.delete('/deleteTodo', (request, response) => {
// 	db.collection('todos')
// 		.deleteOne({ todo: request.body.rainbowUnicorn })
// 		.then((result) => {
// 			console.log('Deleted Todo')
// 			response.json('Deleted It')
// 		})
// 		.catch((err) => console.log(err))
// })