const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

let db,
	dbConnectionStr = process.env.DB_STRING,
	dbName = 'todo'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
	.then((client) => {
		console.log(`Hey, connected to ${dbName} database`)
		db = client.db(dbName)
	})
	.catch((error) => console.log(error))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (request, response) => {
	const todoItems = await db.collection('todos').find().toArray()
	const itemsLeft = await db
		.collection('todos')
		.countDocuments({ completed: false })
	response.render('index.ejs', { zebra: todoItems, left: itemsLeft })
})

app.listen(process.env.PORT || PORT, () => {
	console.log('Server is running, you better catch it!')
})
