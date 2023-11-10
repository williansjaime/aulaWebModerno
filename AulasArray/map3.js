Array.prototype.map2 = function(calback){
    const newArray =[]
    for(let i =0; i< this.length; i++){
        newArray.push(calback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"Kit de Lapis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}'
]

//Retornar um array apenas com preços

const paraObjetos = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjetos).map2(apenasPreco)
console.log(resultado)