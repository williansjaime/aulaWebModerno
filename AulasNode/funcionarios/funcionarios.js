const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response =>{
    const funcionarios = response.data 
    const apenasPais = array => array.pais === 'China'
    const apenasGenero = array => array.genero === 'F'
    const salarioMenor = (func,funcAtual) => {
        return func.salario < funcAtual.salario ? func:funcAtual
    }
    const resultado = funcionarios
        .filter(apenasPais)
        .filter(apenasGenero)
        .reduce(salarioMenor)
    console.log(resultado)
})

