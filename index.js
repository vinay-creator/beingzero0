const express = require('express')
const app = express()
const port = 3000

app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Hello World!'))
app.get('/register', (req, res) => res.send('Hello World!'))

var student = {"name" : "Being Zero",
               "college" : "VNRVJIET",
               "regno": "112323232"}
app.get('/data',(req,res) => res.json(student))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))