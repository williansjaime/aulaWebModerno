function esperarPor(tempo= 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executar promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executar promise 2...'))
//     .then(esperarPor)
//     .then(()=> console.log('Executar promise 3...'))

function retornaValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

function retornaValorRapido(){
    return 20
}


async function executar(){
    let valor = await retornaValorRapido()//retornaValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor +1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

//executar().then(console.log)
async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()