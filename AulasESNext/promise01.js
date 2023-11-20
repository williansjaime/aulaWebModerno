const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscular = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscular)
    .then(console.log)