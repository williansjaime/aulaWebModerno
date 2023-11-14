const sequence = {
    _id:1,
    get id() {return this._id++}
}
const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produto[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produto[id]
    return produto
}

//Deixar visivel para fora do arquivo
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}