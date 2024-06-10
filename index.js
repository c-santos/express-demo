const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.post('/', (req, res) => {
	console.log(req)
	res.send('posted up in the crib.')
})

app.listen(port, () => {
	console.log(`App listening on port: ${port}`)
})

