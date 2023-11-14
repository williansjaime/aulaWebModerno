const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true})) //Tranforma o corpo da requisição em objeto 

app.get('/produtos',(req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //converter para JSON
})

app.get('/produtos/:id',(req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id)) //converter para JSON
})

app.post('/produtos',(req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id',(req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.delete('/produtos',(req, res, next) => {
    const produto = bancoDeDados.excluirProduto({
        id:req.params.id})
    res.send(produto)
})
// app.get('/produtos',(req, res, next) => {
//     res.send({nome:'Notebook', preco:123.45}) //converter para JSON
// })

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`)
})

