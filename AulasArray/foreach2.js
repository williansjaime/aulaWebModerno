function forEach2(array){
    array.forEach(function(nome,indice){
        console.log(`${indice + 1}) ${nome}`)
    })
}

Array.prototype.forEach3 = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']

forEach2(aprovados)

aprovados.forEach3(function(nome,indice){
    console.log(`${indice+1})${nome}`)
})