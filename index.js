require("dotenv-safe").config();

var express = require('express')
var app = express()
var cors = require('cors')

var {produto} = require('./models')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', function(req, res){
    res.send('Teste')
})

app.get('/produtos', async function(req, res){
    var mostrar = await produto.findAll()
    res.json(mostrar)
})

app.get('/produtos/:id', async function(req, res){
    var mostrar = await produto.findByPk(req.params.id)
    res.json(mostrar)
})

app.post('/produtos', async function(req, res){
    var adicionar = await produto.create(req.body)
    res.json(adicionar)
})

app.put('/produtos', async function(req, res){
    
})

app.delete('/produtos', async function(req, res){
    
})

app.listen(3000, function(){
    console.log('Server running at http://localhost:3000')
})