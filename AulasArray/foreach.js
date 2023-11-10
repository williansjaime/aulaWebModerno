const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome=>console.log(nome))

//passar uma funçao como parametro
const exibirAprovado = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovado)