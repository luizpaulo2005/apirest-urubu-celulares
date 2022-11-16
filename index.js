require("dotenv-safe").config();

var express = require('express')
var app = express()
var cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', function(req, res){
    res.send('Teste')
})

app.listen(3000, function(){
    console.log('Server running at http://localhost:3000')
})