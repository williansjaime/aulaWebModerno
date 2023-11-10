const pessoa = {
    nome:'willians',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa)) //Imprimir as chaves do objetos
console.log(Object.values(pessoa)) //Imprimir os valores do objeto
console.log(Object.entries(pessoa)) //Imprimir chave e valores do objeto

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

//define uma nova propriedade
Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true,
    writable: false,
    value:'01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' //Não altera o valor da propriedade
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMASScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o1,o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)